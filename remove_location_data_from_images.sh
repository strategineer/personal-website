#!/bin/bash
exiftool -overwrite_original -gps:all= ./source/*/*/*.{jpg,png}
