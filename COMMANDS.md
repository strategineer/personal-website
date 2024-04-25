Increase the vertical extent of an image so that highball cocktails don't appear as gigantic images

```
convert thumbnail.png -background none -gravity Center -extent 150x100% test.png
```

Check for dead links

```
muffet https://strategineer.com/
```

Run .json barcode scan data to book post code

```
poetry run py "src/mycli/main.py"
```

Format files

```
npx prettier . --write
```

Run tests
```
poetry run pytest --pyargs mycli
```

Compare csvs
```
poetry run csv-diff imported_csvs/export_2024_25_04.csv imported_csvs/export_2024_25_05.csv --key=ISBN13
```
