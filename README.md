# mlb6.github.io

Serves the **public** key for a personal Tesla Fleet API app used by Home Assistant:

https://mlb6.github.io/.well-known/appspecific/com.tesla.3p.public-key.pem

- `.nojekyll` must stay, or GitHub Pages won't serve `.well-known/`.
- Only the public key goes here. The private key stays in Home Assistant (`config/tesla_fleet.key`) and must never be committed.
- If the key changes (Home Assistant reinstalled without its key file), replace the `.pem` here and pair the car again at `tesla.com/_ak/mlb6.github.io`.
