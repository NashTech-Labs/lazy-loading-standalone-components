import { Route } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { ProfileComponent } from "./profile/profile.component";

export const USER_ROUTES: Route[] = [
    {path: '', component: UserComponent},
    {path: 'profile', component: ProfileComponent},
];