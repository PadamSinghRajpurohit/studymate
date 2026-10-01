# IBM Bob Instructions — StudyMate

Build the application exactly according to the files in this folder.

## Goal
Create a simple, clean, responsive web app called **StudyMate** for students to manage study tasks.

## Important rules
- Keep the app simple.
- Do not add features that are not requested.
- Do not use paid APIs or services.
- Do not require a backend or database.
- Store tasks in browser localStorage.
- The app must work after deployment on Vercel.
- Use React + Vite.
- Use simple CSS. Avoid unnecessary UI libraries.
- Make the interface responsive for mobile and desktop.
- Before finishing, test every listed feature.

## Required features
1. Add a task.
2. Each task has:
   - title
   - optional subject
   - optional due date
3. Mark a task completed/uncompleted.
4. Edit a task.
5. Delete a task.
6. Filter: All, Pending, Completed.
7. Search tasks by title or subject.
8. Dashboard counters:
   - Total
   - Pending
   - Completed
9. Save tasks automatically in localStorage.
10. Show a friendly empty state when there are no tasks.

## Do not build
- Login/signup
- Payments
- AI features
- Chat
- Cloud database
- Email
- Notifications
- Admin panel

## Final check
The project must run with:
npm install
npm run dev

and must have a production build with:
npm run build
