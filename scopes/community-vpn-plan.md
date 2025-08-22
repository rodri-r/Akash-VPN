# Community VPN Project - 2 Week Sprint Plan

## Project Overview
Get everything dockerized, hosted on Akash Network, with proper DNS setup and CI/CD pipeline. Focus on infrastructure and deployment rather than building new features.

## Architecture
- **Frontend**: Next.js app (already built) - needs dockerization
- **Documentation**: Docusaurus site (already built) - needs dockerization  
- **VPN Service**: SoftEther VPN server (already in deploy.yml)
- **Reverse Proxy**: Caddy/Traefik for routing and TLS
- **Deployment**: Master SDL file for all services on Akash
- **CI/CD**: Automated builds and deployments

## 5 Main Tasks

### 1. Dockerize Documentation Site
**Owner**: Person A  
**Branch**: `feat/dockerize-docs`  
**Timeline**: Week 1

**What to do**:
- Create Dockerfile for the Docusaurus documentation site
- Ensure it builds and serves properly in a container
- Test that the site works in containerized environment
- Optimize for production builds

**Deliverable**: Working Docker image for the docs site

---

### 2. Dockerize Frontend
**Owner**: Person B  
**Branch**: `feat/dockerize-frontend`  
**Timeline**: Week 1

**What to do**:
- Create Dockerfile for the Next.js frontend
- Ensure it builds and serves properly in a container
- Test that the frontend works in containerized environment
- Optimize for production builds

**Deliverable**: Working Docker image for the frontend

---

### 3. Reverse Proxy Setup
**Owner**: Person C  
**Branch**: `feat/reverse-proxy-setup`  
**Timeline**: Week 1

**What to do**:
- Set up Caddy or Traefik as reverse proxy
- Configure routing rules:
  - `/` → Frontend
  - `/docs` → Documentation site
  - `/api/*` → API server (when built)
  - VPN ports → SoftEther server
- Set up TLS termination with Let's Encrypt
- Test routing between all services

**Deliverable**: Working reverse proxy with proper routing

---

### 4. Master SDL File
**Owner**: Person D  
**Branch**: `feat/master-sdl`  
**Timeline**: Week 2

**What to do**:
- Create comprehensive SDL file that includes all services
- Services to include:
  - Frontend container
  - Documentation container
  - SoftEther VPN server
  - Reverse proxy
  - Any shared volumes or networking
- Configure proper networking between services
- Set up persistent storage where needed

**Deliverable**: Complete Akash SDL that deploys all services together

---

### 5. Connect the Pieces - VPN Config Generation
**Owner**: Person E  
**Branch**: `feat/vpn-config-generation`  
**Timeline**: Week 2

**What to do**:
- **Frontend Form**: Create form that generates VPN configs on demand
- **Backend API**: Build simple API endpoint that generates SoftEther configs
- **Config Generation**: Implement logic to create unique .ovpn files
- **Integration**: Connect frontend form to backend API
- **Download Flow**: Users submit form → get config → download .ovpn file
- **VPN Connection**: Ensure generated configs actually work with SoftEther

**Key Components**:
- Form with optional label/note field
- Generate button that calls API
- Backend generates unique SoftEther config
- Frontend displays download link
- Test that configs work end-to-end

**Deliverable**: Working VPN config generation system where users can create and download working configs

---

## Success Criteria (End of 2 Weeks)
- ✅ All services are dockerized and working
- ✅ Everything is deployed on Akash Network
- ✅ Proper DNS setup for accessing services
- ✅ Services are accessible via HTTPS
- ✅ **VPN config generation works end-to-end**
- ✅ **Users can create and download working VPN configs**
- ✅ **Frontend and backend are connected and functional**

## Technical Notes
- **Week 1**: Focus on infrastructure - getting things running in containers
- **Week 2**: Focus on connecting pieces - making VPN config generation work
- **Deployment ready** - everything should be deployable to Akash
- **Production ready** - proper TLS, routing, and basic functionality

## Questions to Resolve
1. What domain/subdomain structure should we use?
2. How should services communicate with each other?
3. What monitoring/logging do we need?
4. How to handle SoftEther VPN configuration in the new setup?

## Next Steps
1. Assign owners to each task
2. Start with tasks 1-3 (dockerization and reverse proxy)
3. Tasks 4-5 can begin once containers are working
4. Test end-to-end deployment before finalizing
