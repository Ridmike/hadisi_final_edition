import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'ads',loadComponent:()=>import('./components/ads/ads.component').then(c=>c.AdsComponent)},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then(c=>c.RegisterComponent)},
  {path:'cat',loadComponent:()=>import('./components/post-ad-cat/post-ad-cat.component').then(c=>c.PostAdCatComponent)},
  {path:'form',loadComponent:()=>import('./components/post-ad-form/post-ad-form.component').then(c=>c.PostAdFormComponent)},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'about',loadComponent:()=>import('./components/about/about.component').then(c=>c.AboutComponent)},
  {path:'contactus',loadComponent:()=>import('./components/contact-us/contact-us.component').then(c=>c.ContactUsComponent)},
  {path:'float',loadComponent:()=>import('./components/float-btn/float-btn.component').then(c=>c.FloatBtnComponent)},
  {path:'profile',loadComponent:()=>import('./components/user-profile/user-profile.component').then(c=>c.UserProfileComponent)},
  {path:'admin',loadComponent:()=>import('./components/admin/admin.component').then(c=>c.AdminComponent)},
  {path:'side',loadComponent:()=>import('./components/admin-side-panel/admin-side-panel.component').then(c=>c.AdminSidePanelComponent)},
  {path:'admin-user',loadComponent:()=>import('./components/admin-users/admin-users.component').then(c=>c.AdminUsersComponent)},
  {path:'admin-posts',loadComponent:()=>import('./components/admin-posts/admin-posts.component').then(c=>c.AdminPostsComponent)},
  {path:'admin-cat',loadComponent:()=>import('./components/admin-cat/admin-cat.component').then(c=>c.AdminCatComponent)}
];
