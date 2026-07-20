#!/usr/bin/env bash

root="$(dirname "$0")/.."
shopt -s nullglob
status=0
for f in "$root"/test-files/*-fail.{ts,tsx,js,jsx}; do
  output=$(eslint "$f" 2>&1)
  if echo "$output" | grep -qE '✖ 1 problem \(1 error,'; then
    echo "Successfully failed exactly once: $f"
  else
    echo "Expected exactly 1 error: $f"
    echo "----------------------------------------"
    echo "$output"
    echo "----------------------------------------"
    status=1
  fi
done
exit $status
