# API-shelter - Guía Rápida 🚀

## 📦 Imagen Docker
```bash
docker pull jaumegm97/ifc31c-iaw-gual-jaume:v1

bash:

docker run -d -p 3000:3000 --name api-shelter jaumegm97/ifc31c-iaw-gual-jaume:v1

# Contenedor corriendo?
docker ps

# Probar API
curl http://localhost:3000
# O abre en navegador: http://localhost:3000

Descargar docker hub:

docker pull jaumegm97/ifc31c-iaw-gual-jaume:v1
docker run -d -p 3000:3000 --name api-shelter jaumegm97/ifc31c-iaw-gual-jaume:v1
curl http://localhost:3000