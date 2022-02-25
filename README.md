

# MxOnboardingWorkspace

## Pasos que ejecute

### 1-Desinstale angular/cli
`npm uninstall -g @angular/cli`
</br>
</br>

### 2-Limpiar cache
`npm cache clean --force`
</br>
</br>

### 3-Instalar ultima version angular/cli (para trabajar con ultima version de angular)

`npm install -g @angular/cli`
</br>
</br>

### 4-Crear workspace
`npx create-nx-workspace@latest`
</br>
</br>

### 5-Instalar nx
`npm install -g nx`
</br>
</br>

### 6-Creamos la lib share/components
`nx g @nrwl/angular:lib --name=shared/components`
</br>
</br>

### 7-Creamos el componente header comun a todas las apps
`nx g @nrwl/angular:component header --project=shared-components`
</br>
</br>

### 8-Creamos las apps web-ui y web-store
`ng generate @nrwl/angular:application`
</br>
</br>

### 9-Ejecutamos ambas apps
`ng serve web-ui --port=4100`
</br>

`ng serve web-store --port=4200`
</br>
</br>


### 10-Creamos lib para feature login
`nx g @nrwl/angular:lib --name=feature-login --routing`
</br>
</br>

`nx g @nrwl/angular:component login  --project=feature-login`
</br>

### 11-Creamos lib para feature home
`nx g @nrwl/angular:lib --name=feature-home --routing`
</br>

`nx g @nrwl/angular:component home  --project=feature-home`
</br>
</br>

### 12-Creamos lib para feature otp
`nx g @nrwl/angular:lib --name=feature-otp --routing`
</br>
</br>

`nx g @nrwl/angular:component otp  --project=feature-otp`
</br>
</br>

### 13-Creamos libs para shell-web y para shell-store
`nx g @nrwl/angular:lib --routing --lazy --name=shell-web`
</br>

`nx g @nrwl/angular:lib --routing --lazy --name=shell-store`

</br>

### 13-Al final se configuran las rutas para la app web y la app store. 