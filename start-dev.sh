#!/bin/bash
# Convenience script to start the development environment with Caddy reverse proxy

echo "🚀 Starting Akash VPN Development Environment"
echo "============================================="
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

echo "📦 Starting services with docker-compose..."
docker-compose -f docker-compose.local.yml up -d

echo ""
echo "⏳ Waiting for services to start..."
sleep 5

echo ""
echo "🔍 Testing the setup..."
./test-proxy.sh

echo ""
echo "✅ Development environment is ready!"
echo ""
echo "🌐 Available endpoints:"
echo "   Main app: http://localhost/"
echo "   Documentation: http://localhost/docs"
echo "   Health check: http://localhost/health"
echo ""
echo "🔍 Direct service access:"
echo "   Frontend: http://localhost:3001"
echo "   Backend: http://localhost:3002"
echo "   Docs: http://localhost:3003"
echo "   VPN Admin: http://localhost:5555"
echo ""
echo "🛑 To stop: docker-compose -f docker-compose.local.yml down"