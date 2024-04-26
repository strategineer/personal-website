Generate delta .csv file to upload to goodreads based on added/changed book data

```
poetry run py -u "src/mycli/main.py" upload
```

```
poetry run py -u "src/mycli/main.py" upload --debug
```

Compare old and new source of truth csvs if passed in --debug flag to upload command
```
poetry run csv-diff csv/source_of_truth.csv csv/new_source_of_truth.csv --key=ISBN13
```




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