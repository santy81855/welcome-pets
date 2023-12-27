# Project GitHub Workflow

## Branch Naming Convention

-   **main:**
    -   The main branch represents the main branch that always reflects the production-ready state. When you are ready to release a new version or deploy to production, you merge the changes from develop (or other stable branches) into main.
-   **develop:**
    -   The develop branch serves as the development branch, and it is considered the integration branch where new features are merged for testing and further development. It's the branch where you accumulate changes from various feature branches.
-   **features/feature-name:**
    -   Feature branches are created for developing specific features. Each new feature is developed in its own branch inside of the features branch, and when the feature is complete and tested, it is merged back into the develop branch.

## Workflow Overview

-   ### **Clone the Repository:**

    -   **HTTPS**
        ```bash
        git clone https://github.com/santy81855/welcome-pets.git
        cd welcome-pets
        ```
    -   **SSH**
        ```bash
        git clone git@github.com:santy81855/welcome-pets.git
        cd welcome-pets
        ```

-   ### **Individual Workflow**

    -   Each team member works on their feature branch
    -   Create a new branch for each feature or bug fix
    -   Naming convention: 'features/feature-name'

    -   **Steps to do before developing**
        1.  Checkout main branch
            ```bash
            git checkout main
            ```
        1.  Get any recent changes
            ```bash
            git pull
            ```
        1.  Go to your development branch
            -   If it's for a new feature that doesn't have a branch yet:
                ```bash
                git checkout -b features/feature-name
                ```
                -   As a side note, the first time you push changes to your new branch use the following method to push it upstream:
                ```bash
                git push -u origin your-branch-name
                ```
            -   If the branch already exists, check it out and merge any new updates from the main branch to it and solve any conflicts.
                ```bash
                git checkout features/feature-name
                git rebase origin/main
                ```
    -   **Things to do while developing**
        1. Ensure you are in the correct branch often to avoid making changes to the wrong branch
            ```bash
            git status
            ```
        1. Commit often with small, incremental changes with clear messages.
            ```bash
            git add .
            git commit -m "Add feature: [brief description]"
            ```
        1. Check for changes in main often to ensure you're working with the latest code
            - From your current branch get any changes from main without altering your actual code in your branch:
                ```bash
                git fetch origin main
                ```
            - If there are any changes in main, use rebase to add those changes to your branch. This is where you may get merge conflicts, but this is also the best place to fix them.
                ```bash
                git rebase origin/main
                ```
            - Once all conflics are resolved, push your updated branch upstream so other developers can also access it
                ```bash
                git push origin features/your-feature-branch
                ```
    -   **When you finish working on a feature**

        1. Ensure that your feature branch has the most up to date code from the main branch, and that there are no conflicts.
        1. Test the application to ensure that nothing is broken due to this branch.
        1. Create a Pull Request (PR) on GitHub for your feature branch to be merged into the develop branch
            - The pull request should include a description of the cghanges made, the purpose of the changes, and any relevant information that would assist the reader.

    -   **Handling Conflicts**

        1. Identify Conflicts
            ```bash
            git status
            ```
            - This will tell you which files are affected
        1. Open Files with Conflicts:
            - Use a text editor to open the files with conflicts. Git includes conflict markers (<<<<<<<, =======, and >>>>>>>) to indicate conflicting changes from different branches.
        1. Manual Conflict Resolution:
            - Manually edit the files to resolve conflicts. Decide which changes to keep and remove the conflict markers. Consider the context and intent of each change.
            - If you are unsure which changes to keep, contact other team members for their input as well.
        1. Mark as Resolved:
            - After resolving conflicts, mark the files as resolved.
                ```bash
                git add conflicted-file-name
                ```
        1. Continue the merging/rebasing process until all conflicts are solved
            - if rebasing, continue with
                ```bash
                git rebase --continue
                ```
        1. Commit the resolved changes
            ```bash
            git add .
            git commit -m "Resolve conflicts from rebase"
            ```

## Merging into Develop branch

-   Once the feature pull request has been reviewed and any conflicts have been solved, merge the feature branch into the develop branch.
-   Delete the feature branch only after it has been merged and tested.

    ```bash
    git branch -d features/my-feature
    ```

## Releasing into Production

-   Periodically merge develop branch into the main branch, and each merge can be a new release (ex: v1.0.0)
-   Once it is clear that there are no conflicts to resolve in the develop branch, it can be merged into main.
-   Ensure that the develop branch is up to date before merging it into main.
