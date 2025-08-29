#!/bin/bash
# Convenience script to run the Caddy proxy tests from the root directory

echo "🚀 Running Caddy reverse proxy tests..."
echo "======================================="

# Change to the caddy directory and run the test script
cd caddy && ./test-proxy.sh

echo ""
echo "📁 Caddy configuration files are located in: ./caddy/"
echo "   - Caddyfile (production)"
echo "   - Caddyfile.local (development)"
echo "   - PROXY-SETUP.md (setup instructions)"
echo "   - PROXY-STATUS.md (status documentation)"
echo "   - test-proxy.sh (this test script)"