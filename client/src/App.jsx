import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  // HomePage,
  LoginPage,
  SignupPage,
  CompanyCreatePage,
  CompanyEditPage,
  CompanyListPage,
  DashboardPage,
  TasksCreatePage,
  TasksEditPage,
  TasksListPage,
  ErrorComponent,
} from "./routes/Routes.js";

// import { Layouts } from "./components/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/new" element={<TasksCreatePage />} />
        <Route path="/tasks" element={<TasksListPage />} />
        <Route path="/edit/:id" element={<TasksEditPage />} />

        <Route path="/companies" element={<CompanyListPage />} />
        <Route path="/companies/create" element={<CompanyCreatePage />} />
        <Route path="/companies/edit/:id" element={<CompanyEditPage />} />

        <Route path="*" element={<ErrorComponent />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
