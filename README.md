# Mark Starkman's Resume

This is the code that powers [Mark Starkman's Resume](http://resume.markstarkman.com)!

## Start using this repo

1. `git clone git@github.com:mstarkman/resume-part-deux.git`
2. `yarn install`
3. `yarn dev`

## How to update the resume (and everything else)

1. Update the MS Word Doc in the `public/downloads` folder.
2. Save the MS Word Doc
3. Save the MS Word Doc as a PDF
4. Update the `data/experience.ts` file with the updated information
5. `git commit`
6. `git push`
7. Update [LinkedIn](https://www.linkedin.com/in/mstarkman/) with the updated information
8. Update [StackOverflow careers](http://stackoverflow.com/users/story/336623?view=Timeline) with the updated information.

## Deploy

This resume will automatically be deployed to [Now](https://zeit.co/) when changes are pushed to the `master` branch.

## Technologies Used

* [Now](https://zeit.co/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/)
* [Tailwind css](https://tailwindcss.com/)
