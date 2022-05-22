#!/bin/bash
exiftool -r -overwrite_original -gps:all= ./content/.
exiftool -r -overwrite_original -gps:all= ./static/.
