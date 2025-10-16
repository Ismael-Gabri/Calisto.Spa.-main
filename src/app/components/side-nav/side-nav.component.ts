import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const body = document.querySelector("body")!;
    const sidebar = body.querySelector(".sidebar")!;
    const toggle = body.querySelector(".toggle")!;
    const modeSwitch = body.querySelector(".toggle-switch")!;
    const modeText = body.querySelector(".mode-text")!;

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        modeText.textContent = "Light Mode";
      } else {
        modeText.textContent = "Dark Mode";
      }
    });
  }
}