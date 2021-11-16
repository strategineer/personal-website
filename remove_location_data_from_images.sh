#!/bin/bash
exiftool -delete_original -gps:all= ./source/*/*/*.{jpg,png}
