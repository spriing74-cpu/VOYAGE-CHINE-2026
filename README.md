# Voyage Chine 2026

Planificateur de voyage interactif pour le trajet Castres -> Barcelone -> Shanghai -> Pekin.

## Contenu

- Plan transport Tesla + vol + TGV
- Visites a Shanghai et Pekin
- Choix d'hotels et restaurants
- Budget dynamique en CNY et EUR
- Carte interactive avec visites, hotels et hubs transport
- Mode PWA hors ligne

## Lancement local

Depuis le dossier du projet:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Puis ouvrir:

- `http://127.0.0.1:8000`
- ou l'IP locale de la machine sur le meme Wi-Fi

## Publication avec GitHub Pages

1. Initialiser et committer le depot local.
2. Creer un depot GitHub public.
3. Pousser la branche `main`.
4. Activer GitHub Pages depuis la branche `main` et le dossier `/(root)`.

Une fois publie, l'URL sera de la forme:

`https://<login>.github.io/<repo>/`

## Notes

- Le fichier `.nojekyll` est present pour eviter tout build Jekyll inutile.
- Le site est statique: aucune dependance Node ou build n'est necessaire.
