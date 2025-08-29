# 🔄 Caddy Reverse Proxy Configuration

This directory contains all Caddy reverse proxy related files.

## 📁 Directory Structure

```
caddy/
├── README.md              # This file
├── Dockerfile             # Caddy container definition
├── Caddyfile             # Production Caddy configuration
├── Caddyfile.local       # Development Caddy configuration
├── test-proxy.sh         # Proxy testing script
├── PROXY-SETUP.md        # Setup documentation
└── PROXY-STATUS.md       # Status documentation
```

## 🚀 Quick Start

### Development Environment

```bash
# From project root
./start-dev.sh

# Or manually
docker-compose -f docker-compose.local.yml up -d
```

### Test the Proxy Setup

```bash
# From project root
./test-proxy.sh

# Or from caddy directory
cd caddy && ./test-proxy.sh
```

### Production Environment

```bash
# From project root
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 Configuration Files

- **`Caddyfile`**: Production configuration with HTTPS and Let's Encrypt
- **`Caddyfile.local`**: Development configuration with HTTP only
- **`Dockerfile`**: Multi-stage Caddy container build

## 🌐 Service Routing

The Caddy reverse proxy routes traffic as follows:

| Path      | Target Service             | Port |
| --------- | -------------------------- | ---- |
| `/`       | Frontend (Next.js)         | 3000 |
| `/docs/*` | Documentation (Docusaurus) | 3000 |
| `/api/*`  | Backend (Express)          | 3000 |
| `/health` | Health check               | -    |

## 🔍 Direct Access Ports (Development Only)

- **Frontend**: http://localhost:3001
- **Backend**: http://localhost:3002
- **Documentation**: http://localhost:3003
- **VPN Admin**: http://localhost:5555

## 🔒 VPN Service Ports

- **SoftEther VPN**: 992
- **OpenVPN UDP**: 1194
- **IPsec IKE**: 500
- **IPsec NAT-T**: 4500

## 📋 CI/CD Integration

The CI/CD pipeline automatically:

- Detects changes to Caddy configuration files
- Builds multi-architecture Caddy containers
- Runs security scans with Trivy
- Deploys with proper reverse proxy configuration

## 🛠️ Development Tips

1. **View logs**: `docker-compose -f docker-compose.local.yml logs caddy`
2. **Restart Caddy**: `docker-compose -f docker-compose.local.yml restart caddy`
3. **Edit config**: Modify `Caddyfile.local` and restart
4. **Test changes**: Run `./test-proxy.sh` after modifications
