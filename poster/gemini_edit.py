"""Bild-Edit über Gemini 2.5 Flash Image ("Nano Banana"), Windows-tauglich, nur stdlib.
Aufruf:  py gemini_edit.py <input> <output> "<prompt>"
Key:     Umgebungsvariable GEMINI_API_KEY
"""
import os, sys, json, base64, mimetypes, urllib.request, urllib.error

def main():
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not key:
        print("FEHLER: GEMINI_API_KEY nicht gesetzt."); sys.exit(2)
    inp, outp, prompt = sys.argv[1], sys.argv[2], sys.argv[3]
    mime = mimetypes.guess_type(inp)[0] or "image/jpeg"
    data = base64.b64encode(open(inp, "rb").read()).decode()
    model = os.environ.get("GEMINI_IMAGE_MODEL", "gemini-2.5-flash-image")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
    body = {
        "contents": [{"parts": [{"text": prompt}, {"inline_data": {"mime_type": mime, "data": data}}]}],
        "generationConfig": {"responseModalities": ["IMAGE"]},
    }
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key},
    )
    try:
        resp = json.load(urllib.request.urlopen(req, timeout=120))
    except urllib.error.HTTPError as e:
        print("HTTP", e.code, e.read().decode()[:800]); sys.exit(1)
    saved = False
    for cand in resp.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            blob = part.get("inlineData") or part.get("inline_data")
            if blob and blob.get("data"):
                open(outp, "wb").write(base64.b64decode(blob["data"]))
                print("OK gespeichert:", outp); saved = True
            elif part.get("text"):
                print("MODELL-TEXT:", part["text"][:400])
    if not saved:
        print("KEIN BILD ZURÜCK. Antwort-Auszug:", json.dumps(resp)[:800]); sys.exit(1)

if __name__ == "__main__":
    main()
