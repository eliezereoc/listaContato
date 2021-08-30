# listaContato
Lista de Contato - CRUD Angular  

> Implementar o Backend  

    npm init 
    npm i json-server
    db.json 

> Implemenando o Frontend

    ng g new "nome do projeto"
    ng add @angular/material

> Importar os modulos em app.modules 

    HttpClientModule     de @angular/common/http
    ReactiveFormsModule  de @angular/forms
    MatButtonModule      de @angular/material/button
    MatInputModule       de @angular/material/input
    MatFormFieldModule   de @angular/material/form-field
    MatIconModule        de @angular/material/icon
    MatListModule        de @angular/material/list
    MatToolbarModule     de @angular/material/toolbar

> Criar os componentes contactList, contactCreate e contactUdate  

    ng c g "nome do componente"

> Implementar as Rotas  

    path: 'contatos', component: ContactListComponent
    path: 'contatos/novo' component: ContactCreateComponent
    path: 'contatos/editar/:id' component: ContactUdateComponent
    path: '', redirectTo: 'contatos', pathMatch: 'full' 

> Em app.component.html adicione

    <router-outlet></router-outlet>

> Agora implemente seus componentes conforme exemplos...

> Implemente o serviço contatos  
    > Implmentar metodos em services

> Implementar a interface contatos

> Gerar o build da aplicação

    ng build --prod
    
> Fazendo o deploy no [VERCEL](https://vercel.com/)  
    -Intar o CLI da Vercel
    
        npm install -g vercel

> Executar o comando "vercel" no diretorio da aplicação  
    1 - Set up and deploy?   
            Yes.  
    2 - Which scope do you want to deploy to?   
            Confirme com seu usuario na Vesel.    
