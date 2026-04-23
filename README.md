# Antarikstech — Angular SPA 

A Single Page Application built with Angular as part of the Bootstrap Frontend Assessment. This app demonstrates Reactive Forms, Form Validation, Business Logic, and HTTP calls to an external API.

---

## 🚀 Features

- **Reactive Forms** — Inquiry form built with `FormBuilder` and `FormGroup`
- **Validators** — Required, email, and minLength validation on every field
- **Business Logic** — Automatic package recommendation based on selected budget
- **HTTP Call** — Fetches a random joke from [JokeAPI](https://v2.jokeapi.dev/) on page load
- **Bootstrap 5** — Styled with Bootstrap 5 and Bootstrap Icons

---

## 📁 Project Structure

```
angular-app/
├── src/
│   └── app/
│       ├── services/
│       │   └── joke.services.ts   # HTTP service for JokeAPI
│       ├── app.ts                 # Main component + business logic
│       ├── app.html               # Component template
│       ├── app.css                # Component styles
│       └── app.config.ts         # App config + provideHttpClient
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- Angular CLI v17+

```bash
npm install -g @angular/cli
```

### Install & Run

```bash
# Clone the repository
git clone https://github.com/username/antarikstech-angular.git
cd antarikstech-angular

# Install dependencies
npm install

# Start development server
ng serve
```

Open your browser at **http://localhost:4200**

---

## 📋 Feature Details

### Reactive Forms & Validators

The form is built with `ReactiveFormsModule`. Each field has its own set of validators:

| Field   | Validators                       |
|---------|----------------------------------|
| Name    | required, minLength(3)           |
| Email   | required, email                  |
| Budget  | required                         |
| Message | required, minLength(10)          |

Error messages are displayed dynamically when the form is submitted with invalid fields.

### Business Logic — Package Recommendation

When the user selects a budget range, the system automatically recommends a service package:

| Budget | Recommendation |
|--------|----------------|
| Under Rp 1,000,000 | 🌱 Starter Pack — Simple single-page landing page |
| Rp 1,000,000 – Rp 5,000,000 | 🚀 Growth Pack — Multi-page website + contact form |
| Rp 5,000,000 – Rp 20,000,000 | 💼 Business Pack — Web app + dashboard + API integration |
| Above Rp 20,000,000 | 🏆 Enterprise Pack — Fully custom system |

### HTTP Call — JokeAPI

On initial page load, the app makes an HTTP GET request to:

```
https://v2.jokeapi.dev/joke/Programming?type=twopart
```

The response is displayed as a **Fun Fact of the Day** at the top of the page. If the API fails, a hardcoded fallback joke is shown instead.

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| Angular | 19 |
| Bootstrap | 5.3 |
| Bootstrap Icons | 1.11 |
| TypeScript | 5.x |
| JokeAPI | v2 |

---


## 👤 Author

**Jemsdiggory**  
