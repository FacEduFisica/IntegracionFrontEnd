import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppService } from '../../app.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu: Array<any> = [];
    menu: Array<any> = [
        {
            title: 'Inicio',
            icon: 'home',
            rol: '',
            //rol:0,
            route: '/home'
        },
        {
            title: 'Administrador',
            icon: 'view-list',
            rol: 'Admin',
            //rol:1,
            sub: [
                {
                    title: 'Usuarios',
                    route: '/usuarios'
                },
                {
                    title: 'Noticias',
                    route: '/noticias'
                },
                {
                    title: 'Aplicaciones',
                    route: '/aplicaciones'
                },
            ],
            visibility: 'inactive'
        }
    ];


    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService, public loginService: LoginService) {
        this.menuAuthorized();

    }

    ngOnInit() {

    }
    menuAuthorized() {
        this.mainMenu = this.menu.filter((menu) => {
            return this.loginService.isAuthorized(menu.rol);
        })
    }
}