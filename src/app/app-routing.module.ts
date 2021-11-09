import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Layout1Component } from "./layout/layouts/layout-1/layout.component";
import { Layout2Component } from "./layout/layouts/layout-2/layout.component";
import { AdministradorComponent } from './components/administrador/administrador.component';
import { UsuariosComponent } from './components/administrador/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginModule } from './pages/sample-pages/login/login.module';
import { NoticiasComponent } from './components/administrador/noticias/noticias.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './components/login/auth.guard';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { PasswordForgotComponent } from './components/login/password-forgot/password-forgot.component';
import { PasswordResetComponent } from './components/login/password-reset/password-reset.component';
import { AplicacionesComponent } from './components/administrador/aplicaciones/aplicaciones.component';


const routes: Routes = [
    {
        path: 'verify-email/:message',
        component: VerifyEmailComponent,
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'password/email',
        component: PasswordForgotComponent
    },
    {
        path: 'password/reset/:token',
        component: PasswordResetComponent
    },
    {
        path: "",
        component: Layout1Component,
        children: [
            // Home
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadChildren: "./pages/home/home.module#HomeModule"
            },
            {
                path: "administrador",
                component: AdministradorComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "usuarios",
                component: UsuariosComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "noticias",
                component: NoticiasComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "aplicaciones",
                component: AplicacionesComponent,
                canActivate: [AuthGuard]
            },
            // Typography
            {
                path: "typography",
                loadChildren: "./pages/typography/typography.module#TypographyModule"
            },


            // Widgets
            {
                path: "widgets",
                loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
            },


            // Tables
            {
                path: "tables/html-table",
                loadChildren: "./pages/tables/html-table/html-table.module#HtmlTableModule"
            },
            {
                path: "tables/data-table",
                loadChildren: "./pages/tables/data-table/data-table.module#DataTableModule"
            },


            // Forms
            {
                path: "forms/form-elements",
                loadChildren: "./pages/forms/form-elements/form-elements.module#FormElementsModule"
            },
            {
                path: "forms/form-components",
                loadChildren: "./pages/forms/form-components/form-components.module#FormComponentsModule"
            },
            {
                path: "forms/form-layouts",
                loadChildren: "./pages/forms/form-layouts/form-layouts.module#FormLayoutsModule"
            },
            {
                path: "forms/form-validation",
                loadChildren: "./pages/forms/form-validation/form-validation.module#FormValidationModule"
            },


            // User Interfaces
            {
                path: "user-interface/colors",
                loadChildren: "./pages/user-interface/colors/colors.module#ColorsModule"
            },
            {
                path: "user-interface/css-animations",
                loadChildren: "./pages/user-interface/css-animations/css-animations.module#CssAnimationsModule"
            },
            {
                path: "user-interface/buttons",
                loadChildren: "./pages/user-interface/buttons/buttons.module#ButtonsModule"
            },
            {
                path: "user-interface/colors",
                loadChildren: "./pages/user-interface/colors/colors.module#ColorsModule"
            },
            {
                path: "user-interface/icons",
                loadChildren: "./pages/user-interface/icons/icons.module#IconsModule"
            },
            {
                path: "user-interface/listviews",
                loadChildren: "./pages/user-interface/listviews/listviews.module#ListviewsModule"
            },
            {
                path: "user-interface/toolbars",
                loadChildren: "./pages/user-interface/toolbars/toolbars.module#ToolbarsModule"
            },
            {
                path: "user-interface/cards",
                loadChildren: "./pages/user-interface/cards/cards.module#CardsModule"
            },
            {
                path: "user-interface/alerts",
                loadChildren: "./pages/user-interface/alerts/alerts.module#AlertsModule"
            },
            {
                path: "user-interface/badges",
                loadChildren: "./pages/user-interface/badges/badges.module#BadgesModule"
            },
            {
                path: "user-interface/bredcrumbs",
                loadChildren: "./pages/user-interface/bredcrumbs/bredcrumbs.module#BredcrumbsModule"
            },
            {
                path: "user-interface/jumbotron",
                loadChildren: "./pages/user-interface/jumbotron/jumbotron.module#JumbotronModule"
            },
            {
                path: "user-interface/navs",
                loadChildren: "./pages/user-interface/navs/navs.module#NavsModule"
            },
            {
                path: "user-interface/pagination",
                loadChildren: "./pages/user-interface/pagination/pagination.module#PaginationModule"
            },
            {
                path: "user-interface/progress",
                loadChildren: "./pages/user-interface/progress/progress.module#ProgressModule"
            },


            // Bootstrap Components
            {
                path: "bootstrap-components/accordions",
                loadChildren: "./pages/bootstrap-components/accordions/accordions.module#AccordionsModule"
            },
            {
                path: "bootstrap-components/alerts",
                loadChildren: "./pages/bootstrap-components/alerts/alerts.module#AlertsPageModule"
            },
            {
                path: "bootstrap-components/buttons",
                loadChildren: "./pages/bootstrap-components/buttons/buttons.module#ButtonsComponentModule"
            },
            {
                path: "bootstrap-components/carousel",
                loadChildren: "./pages/bootstrap-components/carousel/carousel.module#CarouselPageModule"
            },
            {
                path: "bootstrap-components/collapse",
                loadChildren: "./pages/bootstrap-components/collapse/collapse.module#CollapsePageModule"
            },
            {
                path: "bootstrap-components/datepicker",
                loadChildren: "./pages/bootstrap-components/datepicker/datepicker.module#DatepickerModule"
            },
            {
                path: "bootstrap-components/dropdowns",
                loadChildren: "./pages/bootstrap-components/dropdowns/dropdowns.module#DropdownsModule"
            },
            {
                path: "bootstrap-components/modals",
                loadChildren: "./pages/bootstrap-components/modals/modals.module#ModalsModule"
            },
            {
                path: "bootstrap-components/pagination",
                loadChildren: "./pages/bootstrap-components/pagination/pagination.module#PaginationPageModule"
            },
            {
                path: "bootstrap-components/popover",
                loadChildren: "./pages/bootstrap-components/popover/popover.module#PopoverPageModule"
            },
            {
                path: "bootstrap-components/progressbar",
                loadChildren: "./pages/bootstrap-components/progressbar/progressbar.module#ProgressbarPageModule"
            },
            {
                path: "bootstrap-components/rating",
                loadChildren: "./pages/bootstrap-components/rating/rating.module#RatingPageModule"
            },
            {
                path: "bootstrap-components/sortable",
                loadChildren: "./pages/bootstrap-components/sortable/sortable.module#SortablePageModule"
            },
            {
                path: "bootstrap-components/tabs",
                loadChildren: "./pages/bootstrap-components/tabs/tabs.module#TabsPageModule"
            },
            {
                path: "bootstrap-components/timepicker",
                loadChildren: "./pages/bootstrap-components/timepicker/timepicker.module#TimepickerPageModule"
            },
            {
                path: "bootstrap-components/tooltips",
                loadChildren: "./pages/bootstrap-components/tooltips/tooltips.module#TooltipsPageModule"
            },
            {
                path: "bootstrap-components/typeahead",
                loadChildren: "./pages/bootstrap-components/typeahead/typeahead.module#TypeaheadPageModule"
            },


            // Charts and Maps
            {
                path: "charts-maps/charts",
                loadChildren: "./pages/charts-maps/charts/charts.module#ChartsModule"
            },
            {
                path: "charts-maps/maps",
                loadChildren: "./pages/charts-maps/maps/maps.module#MapsModule"
            },


            // Photo Gallery
            {
                path: "photo-gallery",
                loadChildren: "./pages/photo-gallery/photo-gallery.module#PhotoGalleryModule"
            },


            // Sample Pages
            {
                path: "sample-pages/profile",
                loadChildren: "./pages/sample-pages/profile/profile.module#ProfileModule"
            },
            {
                path: "sample-pages/messages",
                loadChildren: "./pages/sample-pages/messages/messages.module#MessagesModule"
            },
            {
                path: "sample-pages/contacts",
                loadChildren: "./pages/sample-pages/contacts/contacts.module#ContactsModule"
            },
            {
                path: "sample-pages/new-contact",
                loadChildren: "./pages/sample-pages/new-contact/new-contact.module#NewContactModule"
            },
            {
                path: "sample-pages/groups",
                loadChildren: "./pages/sample-pages/groups/groups.module#GroupsModule"
            },
            {
                path: "sample-pages/pricing-tables",
                loadChildren: "./pages/sample-pages/pricing-tables/pricing-tables.module#PricingTablesModule"
            },
            {
                path: "sample-pages/invoice",
                loadChildren: "./pages/sample-pages/invoice/invoice.module#InvoiceModule"
            },
            {
                path: "sample-pages/todo-lists",
                loadChildren: "./pages/sample-pages/todo-lists/todo-lists.module#TodoListsModule"
            },
            {
                path: "sample-pages/notes",
                loadChildren: "./pages/sample-pages/notes/notes.module#NotesModule"
            },
            {
                path: "sample-pages/search-results",
                loadChildren: "./pages/sample-pages/search-results/search-results.module#SearchResultsModule"
            },
            {
                path: "sample-pages/issue-tracker",
                loadChildren: "./pages/sample-pages/issue-tracker/issue-tracker.module#IssueTrackerModule"
            },
            {
                path: "sample-pages/faq",
                loadChildren: "./pages/sample-pages/faq/faq.module#FaqModule"
            },
            {
                path: "sample-pages/team",
                loadChildren: "./pages/sample-pages/team/team.module#TeamModule"
            },
            {
                path: "sample-pages/blog",
                loadChildren: "./pages/sample-pages/blog/blog.module#BlogModule"
            },
            {
                path: "sample-pages/blog-details",
                loadChildren: "./pages/sample-pages/blog-details/blog-details.module#BlogDetailsModule"
            },

        ]
    },
    {
        path: "",
        component: Layout2Component,
        children: [
            {
                path: "sample-pages/login",
                loadChildren: "./pages/sample-pages/login/login.module#LoginModule"
            },
            {
                path: "sample-pages/lockscreen",
                loadChildren: "./pages/sample-pages/lockscreen/lockscreen.module#LockscreenModule"
            },
            {
                path: "404",
                loadChildren: "./pages/sample-pages/four-zero-four/four-zero-four.module#FourZeroFourModule"
            },
            {
                path: "**",
                redirectTo: "/404"
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
