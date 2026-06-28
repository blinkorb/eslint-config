#!/usr/bin/env bash

root="$(dirname "$0")/.."
status=0
for f in "$root"/test-files/*-fail.ts; do
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
