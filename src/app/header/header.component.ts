import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes()
      .subscribe();
  }

  onLogout() {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
