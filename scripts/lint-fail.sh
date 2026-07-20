#!/usr/bin/env bash

root="$(dirname "$0")/.."
status=0
while IFS= read -r -d '' f; do
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
done < <(find "$root"/test-files \( -name '*-fail.ts' -o -name '*-fail.tsx' -o -name '*-fail.js' -o -name '*-fail.jsx' \) -type f -print0)
exit $status
