"""Text->Bild über Gemini 2.5 Flash Image ("Nano Banana"). Nur stdlib.
Aufruf:  py gemini_gen.py <output.png> <aspect> "<prompt>"
aspect:  1:1 | 16:9 | 4:3 | 3:4 | 9:16
Key:     GEMINI_API_KEY
"""
import os, sys, json, base64, urllib.request, urllib.error

def main():
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not key:
        print("FEHLER: GEMINI_API_KEY fehlt"); sys.exit(2)
    outp, aspect, prompt = sys.argv[1], sys.argv[2], sys.argv[3]
    model = "gemini-2.5-flash-image"
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"],
                              "imageConfig": {"aspectRatio": aspect}},
    }
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key})
    try:
        resp = json.load(urllib.request.urlopen(req, timeout=180))
    except urllib.error.HTTPError as e:
        msg = e.read().decode()
        # Fallback ohne imageConfig, falls nicht unterstützt
        if "imageConfig" in msg or e.code == 400:
            body["generationConfig"].pop("imageConfig", None)
            body["contents"][0]["parts"][0]["text"] += f"  Aspect ratio {aspect}, wide composition."
            req = urllib.request.Request(url, data=json.dumps(body).encode(),
                headers={"Content-Type": "application/json", "x-goog-api-key": key})
            try:
                resp = json.load(urllib.request.urlopen(req, timeout=180))
            except urllib.error.HTTPError as e2:
                print("HTTP", e2.code, e2.read().decode()[:600]); sys.exit(1)
        else:
            print("HTTP", e.code, msg[:600]); sys.exit(1)
    for cand in resp.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            blob = part.get("inlineData") or part.get("inline_data")
            if blob and blob.get("data"):
                open(outp, "wb").write(base64.b64decode(blob["data"]))
                print("OK", outp); return
            if part.get("text"):
                print("TEXT:", part["text"][:300])
    print("KEIN BILD:", json.dumps(resp)[:600]); sys.exit(1)

if __name__ == "__main__":
    main()
