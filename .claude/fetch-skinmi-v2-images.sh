#!/usr/bin/env bash
# Télécharge les visuels Higgsfield de skinmi-v2 (nécessite d8j0ntlcm91z4.cloudfront.net autorisé)
set -euo pipefail
cd "$(dirname "$0")/../skinmi-v2/images"
B=https://d8j0ntlcm91z4.cloudfront.net/user_3JMuWHdXRRFmtzwfyRXZ1CbAelY
curl -fsSL -o hero.png       "$B/hf_20260926_184815_13e74d30-34a0-4a28-921f-f29a35978b6b.png"
curl -fsSL -o soin.png       "$B/hf_20260926_184727_55244d7f-e0b6-40d9-9767-d480126b22cb.png"
curl -fsSL -o diagnostic.png "$B/hf_20260926_184843_59c5923f-b433-4c0e-8086-7a9546e5016f.png"
curl -fsSL -o brunch.png     "$B/hf_20260926_184728_f22943cd-2f0f-4cc5-b030-310008ad702c.png"
curl -fsSL -o produits.png   "$B/hf_20260926_184727_3b36be83-860d-42f2-b626-d53fb4d30bb5.png"
curl -fsSL -o rituel.png     "$B/hf_20260926_184728_1dd42fa1-0062-44d7-ab23-da2b38f9bdd1.png"
