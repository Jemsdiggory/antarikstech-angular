import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './services/joke.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  inquiryForm!: FormGroup;
  submitted = false;
  recommendation = '';
  joke: any = null;
  jokeLoading = true;

  constructor(private fb: FormBuilder, private jokeService: JokeService) {}

  ngOnInit() {
    this.inquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // HTTP call when component loads
    this.jokeService.getJoke().subscribe({
      next: (data) => {
        this.joke = {
          setup: data.setup,
          punchline: data.delivery  
        };
        this.jokeLoading = false;
      },
      error: () => {
        this.joke = {
          setup: 'Why do programmers prefer dark mode?',
          punchline: 'Because light attracts bugs! 🐛'
        };
        this.jokeLoading = false;
      }
    });

    // business logic, to give reccomendation 
    this.inquiryForm.get('budget')?.valueChanges.subscribe(value => {
      this.updateRecommendation(value);
    });
  }

  // getter to access form controls easily in template
  get f() { return this.inquiryForm.controls; }

  updateRecommendation(budget: string) {
    const map: Record<string, string> = {
      'under-1jt':  '🌱 Starter Pack — 1 landing page.',
      '1jt-5jt':    '🚀 Growth Pack — multi-page website + contact form.',
      '5jt-20jt':   '💼 Business Pack — Web app + dashboard + API integration.',
      'above-20jt': '🏆 Enterprise Pack — Full system custom.'
    };
    this.recommendation = map[budget] || '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.inquiryForm.invalid) return;
    // valid form submission logic here (send to backend)
    console.log('Form submitted:', this.inquiryForm.value);
  }

  onReset() {
    this.submitted = false;
    this.recommendation = '';
    this.inquiryForm.reset();
  }
}