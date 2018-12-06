module.exports = {
  "multiple-parents-name": "Multiple parents",
  "multiple-parents-hint": "Use `git branch bugWork` with a target commit to create the missing reference.",
  "multiple-parents-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Specifying Parents",
            "",
            "Like the `~` modifier, the `^` modifier also accepts an optional number after it.",
            "",
            "Rather than specifying the number of generations to go back (what `~` takes), the modifier on `^` specifies which parent reference to follow from a merge commit. Remember that merge commits have multiple parents, so the path to choose is ambiguous.",
            "",
            "Git will normally follow the \"first\" parent upwards from a merge commit, but specifying a number with `^` changes this default behavior.",
            "",
            "Enough talking, let's see it in action.",
            ""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Here we have a merge commit. If we checkout `master^` without the modifier, we will follow the first parent after the merge commit. ",
            "",
            "(*In our visuals, the first parent is positioned directly above the merge commit.*)"
          ],
          "afterMarkdowns": [
            "Easy -- this is what we are all used to."
          ],
          "command": "git checkout master^",
          "beforeCommand": "git checkout HEAD^; git commit; git checkout master; git merge C2"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Now let's try specifying the second parent instead..."
          ],
          "afterMarkdowns": [
            "See? We followed the other parent upwards."
          ],
          "command": "git checkout master^2",
          "beforeCommand": "git checkout HEAD^; git commit; git checkout master; git merge C2"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "The `^` and `~` modifiers can make moving around a commit tree very powerful:"
          ],
          "afterMarkdowns": [
            "Lightning fast!"
          ],
          "command": "git checkout HEAD~; git checkout HEAD^2; git checkout HEAD~2",
          "beforeCommand": "git commit; git checkout C0; git commit; git commit; git commit; git checkout master; git merge C5; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Even crazier, these modifiers can be chained together! Check this out:"
          ],
          "afterMarkdowns": [
            "The same movement as before, but all in one command."
          ],
          "command": "git checkout HEAD~^2~2",
          "beforeCommand": "git commit; git checkout C0; git commit; git commit; git commit; git checkout master; git merge C5; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Put it to practice",
            "",
            "To complete this level, create a new branch at the specified destination.",
            "",
            "Obviously it would be easy to specify the commit directly (with something like `C6`), but I challenge you to use the modifiers we talked about instead!"
          ]
        }
      }
    ]
  },
  "branching-name": "Branching in Git",
  "branching-hint": "Make a new branch with \"git branch <branch-name>\" and check it out with \"git checkout <branch-name>\"",
  "branching-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Branches",
            "",
            "Branches in Git are incredibly lightweight as well. They are simply pointers to a specific commit -- nothing more. This is why many Git enthusiasts chant the mantra:",
            "",
            "```",
            "branch early, and branch often",
            "```",
            "",
            "Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.",
            "",
            "When we start mixing branches and commits, we will see how these two features combine. For now though, just remember that a branch essentially says \"I want to include the work of this commit and all parent commits.\""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see what branches look like in practice.",
            "",
            "Here we will create a new branch named `newImage`"
          ],
          "afterMarkdowns": [
            "There, that's all there is to branching! The branch `newImage` now refers to commit `C1`"
          ],
          "command": "git branch newImage",
          "beforeCommand": ""
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's try to put some work on this new branch. Hit the button below"
          ],
          "afterMarkdowns": [
            "Oh no! The `master` branch moved but the `newImage` branch didn't! That's because we weren't \"on\" the new branch, which is why the asterisk (*) was on `master`"
          ],
          "command": "git commit",
          "beforeCommand": "git branch newImage"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's tell git we want to checkout the branch with",
            "",
            "```",
            "git checkout <name>",
            "```",
            "",
            "This will put us on the new branch before committing our changes"
          ],
          "afterMarkdowns": [
            "There we go! Our changes were recorded on the new branch"
          ],
          "command": "git checkout newImage; git commit",
          "beforeCommand": "git branch newImage"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Ok! You are all ready to get branching. Once this window closes,",
            "make a new branch named `bugFix` and switch to that branch.",
            "",
            "By the way, here's a shortcut: if you want to create a new ",
            "branch AND check it out at the same time, you can simply ",
            "type `git checkout -b [yourbranchname]`."
          ]
        }
      }
    ]
  },
  "commits-name": "Introduction to Git Commits",
  "commits-hint": "Just type in 'git commit' twice to finish!",
  "commits-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Commits",
            "A commit in a git repository records a snapshot of all the files in your directory. It's like a giant copy and paste, but even better!",
            "",
            "Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a \"delta\", from one version of the repository to the next.",
            "",
            "Git also maintains a history of which commits were made when. That's why most commits have ancestor commits above them -- we designate this with arrows in our visualization. Maintaining history is great for everyone working on the project!",
            "",
            "It's a lot to take in, but for now you can think of commits as snapshots of the project. Commits are very lightweight and switching between them is wicked fast!"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see what this looks like in practice. On the right we have a visualization of a (small) git repository. There are two commits right now -- the first initial commit, `C0`, and one commit after that `C1` that might have some meaningful changes.",
            "",
            "Hit the button below to make a new commit"
          ],
          "afterMarkdowns": [
            "There we go! Awesome. We just made changes to the repository and saved them as a commit. The commit we just made has a parent, `C1`, which references which commit it was based off of."
          ],
          "command": "git commit",
          "beforeCommand": ""
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Go ahead and try it out on your own! After this window closes, make two commits to complete the level"
          ]
        }
      }
    ]
  },
  "merging-name": "Merging in Git",
  "merging-hint": "Remember to commit in the order specified (bugFix before master)",
  "merging-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Branches and Merging",
            "",
            "Great! We now know how to commit and branch. Now we need to learn some kind of way of combining the work from two different branches together. This will allow us to branch off, develop a new feature, and then combine it back in.",
            "",
            "The first method to combine work that we will examine is `git merge`. Merging in Git creates a special commit that has two unique parents. A commit with two parents essentially means \"I want to include all the work from this parent over here and this one over here, *and* the set of all their parents.\"",
            "",
            "It's easier with visuals, let's check it out in the next view"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Here we have two branches; each has one commit that's unique. This means that neither branch includes the entire set of \"work\" in the repository that we have done. Let's fix that with merge.",
            "",
            "We will `merge` the branch `bugFix` into `master`"
          ],
          "afterMarkdowns": [
            "Woah! See that? First of all, `master` now points to a commit that has two parents. If you follow the arrows up the commit tree from `master`, you will hit every commit along the way to the root. This means that `master` contains all the work in the repository now.",
            "",
            "Also, see how the colors of the commits changed? To help with learning, I have included some color coordination. Each branch has a unique color. Each commit turns a color that is the blended combination of all the branches that contain that commit.",
            "",
            "So here we see that the `master` branch color is blended into all the commits, but the `bugFix` color is not. Let's fix that..."
          ],
          "command": "git merge bugFix",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's merge `master` into `bugFix`:"
          ],
          "afterMarkdowns": [
            "Since `bugFix` was an ancestor of `master`, git didn't have to do any work; it simply just moved `bugFix` to the same commit `master` was attached to.",
            "",
            "Now all the commits are the same color, which means each branch contains all the work in the repository! Woohoo!"
          ],
          "command": "git checkout bugFix; git merge master",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit; git merge bugFix"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, do the following steps:",
            "",
            "* Make a new branch called `bugFix`",
            "* Checkout the `bugFix` branch with `git checkout bugFix`",
            "* Commit once",
            "* Go back to `master` with `git checkout`",
            "* Commit another time",
            "* Merge the branch `bugFix` into `master` with `git merge`",
            "",
            "*Remember, you can always re-display this dialog with \"objective\"!*"
          ]
        }
      }
    ]
  },
  "rebasing-name": "Rebase Introduction",
  "rebasing-hint": "Make sure you commit from bugFix first",
  "rebasing-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Rebase",
            "",
            "The second way of combining work between branches is *rebasing.* Rebasing essentially takes a set of commits, \"copies\" them, and plops them down somewhere else.",
            "",
            "While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.",
            "",
            "Let's see it in action..."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Here we have two branches yet again; note that the bugFix branch is currently selected (note the asterisk)",
            "",
            "We would like to move our work from bugFix directly onto the work from master. That way it would look like these two features were developed sequentially, when in reality they were developed in parallel.",
            "",
            "Let's do that with the `git rebase` command"
          ],
          "afterMarkdowns": [
            "Awesome! Now the work from our bugFix branch is right on top of master and we have a nice linear sequence of commits.",
            "",
            "Note that the commit C3 still exists somewhere (it has a faded appearance in the tree), and C3' is the \"copy\" that we rebased onto master.",
            "",
            "The only problem is that master hasn't been updated either, let's do that now..."
          ],
          "command": "git rebase master",
          "beforeCommand": "git commit; git checkout -b bugFix C1; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Now we are checked out on the `master` branch. Let's go ahead and rebase onto `bugFix`..."
          ],
          "afterMarkdowns": [
            "There! Since `master` was an ancestor of `bugFix`, git simply moved the `master` branch reference forward in history."
          ],
          "command": "git rebase bugFix",
          "beforeCommand": "git commit; git checkout -b bugFix C1; git commit; git rebase master; git checkout master"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, do the following",
            "",
            "* Checkout a new branch named `bugFix`",
            "* Commit once",
            "* Go back to master and commit again",
            "* Check out bugFix again and rebase onto master",
            "",
            "Good luck!"
          ]
        }
      }
    ]
  },
  "describe-name": "Git Describe",
  "describe-hint": "Just commit once on bugFix when you're ready to move on",
  "describe-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Git Describe",
            "",
            "Because tags serve as such great \"anchors\" in the codebase, git has a command to *describe* where you are relative to the closest \"anchor\" (aka tag). And that command is called `git describe`!",
            "",
            "Git describe can help you get your bearings after you've moved many commits backwards or forwards in history; this can happen after you've completed a git bisect (a debugging search) or when sitting down at a coworkers computer who just got back from vacation."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Git describe takes the form of:",
            "",
            "`git describe <ref>`",
            "",
            "Where `<ref>` is anything git can resolve into a commit. If you don't specify a ref, git just uses where you're checked out right now (`HEAD`).",
            "",
            "The output of the command looks like:",
            "",
            "`<tag>_<numCommits>_g<hash>`",
            "",
            "Where `tag` is the closest ancestor tag in history, `numCommits` is how many commits away that tag is, and `<hash>` is the hash of the commit being described."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's look at a quick example. For this tree below:"
          ],
          "afterMarkdowns": [
            "The command `git describe master` would output:",
            "",
            "`v1_2_gC2`",
            "",
            "Whereas `git describe side` would output:",
            "",
            "`v2_1_gC4`"
          ],
          "command": "git tag v2 C3",
          "beforeCommand": "git commit; go -b side HEAD~1; gc; gc; git tag v1 C0"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "That's pretty much all there is to git describe! Try describing a few of the locations in this level to get a feel for the command.",
            "",
            "Once you're ready, just go ahead and commit once to finish the level. We're giving you a freebie :P"
          ]
        }
      }
    ]
  },
  "grabbing-one-commit-name": "Grabbing Just 1 Commit",
  "grabbing-one-commit-hint": "Remember, interactive rebase or cherry-pick is your friend here",
  "grabbing-one-commit-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Locally stacked commits",
            "",
            "Here's a development situation that often happens: I'm trying to track down a bug but it is quite elusive. In order to aid in my detective work, I put in a few debug commands and a few print statements.",
            "",
            "All of these debugging / print statements are in their own commits. Finally I track down the bug, fix it, and rejoice!",
            "",
            "Only problem is that I now need to get my `bugFix` back into the `master` branch. If I simply fast-forwarded `master`, then `master` would get all my debug statements which is undesirable. There has to be another way..."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "We need to tell git to copy only one of the commits over. This is just like the levels earlier on moving work around -- we can use the same commands:",
            "",
            "* `git rebase -i`",
            "* `git cherry-pick`",
            "",
            "To achieve this goal."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "This is a later level so we will leave it up to you to decide which command you want to use, but in order to complete the level, make sure `master` receives the commit that `bugFix` references."
          ]
        }
      }
    ]
  },
  "juggling-commits-name": "Juggling Commits",
  "juggling-commits-hint": "The first command is git rebase -i HEAD~2",
  "juggling-commits-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Juggling Commits",
            "",
            "Here's another situation that happens quite commonly. You have some changes (`newImage`) and another set of changes (`caption`) that are related, so they are stacked on top of each other in your repository (aka one after another).",
            "",
            "The tricky thing is that sometimes you need to make a small modification to an earlier commit. In this case, design wants us to change the dimensions of `newImage` slightly, even though that commit is way back in our history!!"
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "We will overcome this difficulty by doing the following:",
            "",
            "* We will re-order the commits so the one we want to change is on top with `git rebase -i`",
            "* We will `commit --amend` to make the slight modification",
            "* Then we will re-order the commits back to how they were previously with `git rebase -i`",
            "* Finally, we will move master to this updated part of the tree to finish the level (via the method of your choosing)",
            "",
            "There are many ways to accomplish this overall goal (I see you eye-ing cherry-pick), and we will see more of them later, but for now let's focus on this technique.",
            "Lastly, pay attention to the goal state here -- since we move the commits twice, they both get an apostrophe appended. One more apostrophe is added for the commit we amend, which gives us the final form of the tree ",
            "",
            "That being said, I can compare levels now based on structure and relative apostrophe differences. As long as your tree's `master` branch has the same structure and relative apostrophe differences, I'll give full credit"
          ]
        }
      }
    ]
  },
  "juggling-commits2-name": "Juggling Commits #2",
  "juggling-commits2-hint": "Don't forget to forward master to the updated changes!",
  "juggling-commits2-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Juggling Commits #2",
            "",
            "*If you haven't completed Juggling Commits #1 (the previous level), please do so before continuing*",
            "",
            "As you saw in the last level, we used `rebase -i` to reorder the commits. Once the commit we wanted to change was on top, we could easily --amend it and re-order back to our preferred order.",
            "",
            "The only issue here is that there is a lot of reordering going on, which can introduce rebase conflicts. Let's look at another method with `git cherry-pick`"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Remember that git cherry-pick will plop down a commit from anywhere in the tree onto HEAD (as long as that commit isn't an ancestor of HEAD).",
            "",
            "Here's a small refresher demo:"
          ],
          "afterMarkdowns": [
            "Nice! Let's move on"
          ],
          "command": "git cherry-pick C2",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "So in this level, let's accomplish the same objective of amending `C2` once but avoid using `rebase -i`. I'll leave it up to you to figure it out! :D",
            "",
            "Remember, the exact number of apostrophe's (') on the commit are not important, only the relative differences. For example, I will give credit to a tree that matches the goal tree but has one extra apostrophe everywhere"
          ]
        }
      }
    ]
  },
  "tags-name": "Git Tags",
  "tags-hint": "you can either check out the commit directly or simply checkout the tag!",
  "tags-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Tags",
            "",
            "As you have learned from previous lessons, branches are easy to move around and often refer to different commits as work is completed on them. Branches are easily mutated, often temporary, and always changing.",
            "",
            "If that's the case, you may be wondering if there's a way to *permanently* mark historical points in your project's history. For things like major releases and big merges, is there any way to mark these commits with something more permanent than a branch?",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "You bet there is! Git tags support this exact use case -- they (somewhat) permanently mark certain commits as \"milestones\" that you can then reference like a branch.",
            "",
            "More importantly though, they never move as more commits are created. You can't \"check out\" a tag and then complete work on that tag -- tags exist as anchors in the commit tree that designate certain spots.",
            "",
            "Let's see what tags look like in practice."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's try making a tag at `C1` which is our version 1 prototype"
          ],
          "afterMarkdowns": [
            "There! Quite easy. We named the tag `v1` and referenced the commit `C1` explicitly. If you leave the commit off, git will just use whatever `HEAD` is at"
          ],
          "command": "git tag v1 C1",
          "beforeCommand": "git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "For this level just create the tags in the goal visualization and then check `v1` out. Notice how you go into detached `HEAD` state -- this is because you can't commit directly onto the `v1` tag.",
            "",
            "In the next level we'll examine a more interesting use case for tags."
          ]
        }
      }
    ]
  },
  "cherry-pick-name": "Cherry-pick Intro",
  "cherry-pick-hint": "git cherry-pick followed by commit names!",
  "cherry-pick-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Moving Work Around",
            "",
            "So far we've covered the basics of git -- committing, branching, and moving around in the source tree. Just these concepts are enough to leverage 90% of the power of git repositories and cover the main needs of developers.",
            "",
            "That remaining 10%, however, can be quite useful during complex workflows (or when you've gotten yourself into a bind). The next concept we're going to cover is \"moving work around\" -- in other words, it's a way for developers to say \"I want this work here and that work there\" in precise, eloquent, flexible ways.",
            "",
            "This may seem like a lot, but it's a simple concept."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Cherry-pick",
            "",
            "The first command in this series is called `git cherry-pick`. It takes on the following form:",
            "",
            "* `git cherry-pick <Commit1> <Commit2> <...>`",
            "",
            "It's a very straightforward way of saying that you would like to copy a series of commits below your current location (`HEAD`). I personally love `cherry-pick` because there is very little magic involved and it's easy to understand.",
            "",
            "Let's see a demo!",
            ""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Here's a repository where we have some work in branch `side` that we want to copy to `master`. This could be accomplished through a rebase (which we have already learned), but let's see how cherry-pick performs."
          ],
          "afterMarkdowns": [
            "That's it! We wanted commits `C2` and `C4` and git plopped them down right below us. Simple as that!"
          ],
          "command": "git cherry-pick C2 C4",
          "beforeCommand": "git checkout -b side; git commit; git commit; git commit; git checkout master; git commit;"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, simply copy some work from the three branches shown into master. You can see which commits we want by looking at the goal visualization.",
            ""
          ]
        }
      }
    ]
  },
  "detached-head-name": "Detach yo' HEAD",
  "detached-head-hint": "Use the label (hash) on the commit for help!",
  "detached-head-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Moving around in Git",
            "",
            "Before we get to some of the more advanced features of Git, it's important to understand different ways to move through the commit tree that represents your project.",
            "",
            "Once you're comfortable moving around, your powers with other git commands will be amplified!",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## HEAD",
            "",
            "First we have to talk about \"HEAD\". HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.",
            "",
            "HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.",
            "",
            "Normally HEAD points to a branch name (like bugFix). When you commit, the status of bugFix is altered and this change is visible through HEAD."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see this in action. Here we will reveal HEAD before and after a commit."
          ],
          "afterMarkdowns": [
            "See! HEAD was hiding underneath our `master` branch all along."
          ],
          "command": "git checkout C1; git checkout master; git commit; git checkout C2",
          "beforeCommand": ""
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "### Detaching HEAD",
            "",
            "Detaching HEAD just means attaching it to a commit instead of a branch. This is what it looks like beforehand:",
            "",
            "HEAD -> master -> C1",
            ""
          ],
          "afterMarkdowns": [
            "And now it's",
            "",
            "HEAD -> C1"
          ],
          "command": "git checkout C1",
          "beforeCommand": ""
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, let's detach HEAD from `bugFix` and attach it to the commit instead.",
            "",
            "Specify this commit by its hash. The hash for each commit is displayed on the circle that represents the commit."
          ]
        }
      }
    ]
  },
  "interactive-rebase-name": "Interactive Rebase Intro",
  "interactive-rebase-hint": "you can use either branches or relative refs (HEAD~) to specify the rebase target",
  "interactive-rebase-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Interactive Rebase",
            "",
            "Git cherry-pick is great when you know which commits you want (_and_ you know their corresponding hashes) -- it's hard to beat the simplicity it provides.",
            "",
            "But what about the situation where you don't know what commits you want? Thankfully git has you covered there as well! We can use interactive rebasing for this -- it's the best way to review a series of commits you're about to rebase.",
            "",
            "Let's dive into the details..."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "All interactive rebase means is using the `rebase` command with the `-i` option.",
            "",
            "If you include this option, git will open up a UI to show you which commits are about to be copied below the target of the rebase. It also shows their commit hashes and messages, which is great for getting a bearing on what's what.",
            "",
            "For \"real\" git, the UI window means opening up a file in a text editor like `vim`. For our purposes, I've built a small dialog window that behaves the same way."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "When the interactive rebase dialog opens, you have the ability to do 3 things:",
            "",
            "* You can reorder commits simply by changing their order in the UI (in our window this means dragging and dropping with the mouse).",
            "* You can choose to completely omit some commits. This is designated by `pick` -- toggling `pick` off means you want to drop the commit.",
            "* Lastly, you can squash commits. Unfortunately our levels don't support this for a few logistical reasons, so I'll skip over the details of this. Long story short, though -- it allows you to combine commits.",
            "",
            "Great! Let's see an example."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "When you hit the button, an interactive rebase window will appear. Reorder some commits around (or feel free to unpick some) and see the result!"
          ],
          "afterMarkdowns": [
            "Boom! Git copied down commits in the exact same way you specified through the UI"
          ],
          "command": "git rebase -i HEAD~4 --aboveAll",
          "beforeCommand": "git commit; git commit; git commit; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To finish this level, do an interactive rebase and achieve the order shown in the goal visualization. Remember you can always `undo` or `reset` to fix mistakes :D"
          ]
        }
      }
    ]
  },
  "relative-refs-name": "Relative Refs (^)",
  "relative-refs-hint": "Remember the Caret (^) operator!",
  "relative-refs-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Relative Refs",
            "",
            "Moving around in Git by specifying commit hashes can get a bit tedious. In the real world you won't have a nice commit tree visualization next to your terminal, so you'll have to use `git log` to see hashes.",
            "",
            "Furthermore, hashes are usually a lot longer in the real Git world as well. For instance, the hash of the commit that introduced the previous level is `fed2da64c0efc5293610bdd892f82a58e8cbc5d8`. Doesn't exactly roll off the tongue...",
            "",
            "The upside is that Git is smart about hashes. It only requires you to specify enough characters of the hash until it uniquely identifies the commit. So I can type `fed2` instead of the long string above."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Like I said, specifying commits by their hash isn't the most convenient thing ever, which is why Git has relative refs. They are awesome!",
            "",
            "With relative refs, you can start somewhere memorable (like the branch `bugFix` or `HEAD`) and work from there.",
            "",
            "Relative commits are powerful, but we will introduce two simple ones here:",
            "",
            "* Moving upwards one commit at a time with `^`",
            "* Moving upwards a number of times with `~<num>`"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's look at the Caret (^) operator first. Each time you append that to a ref name, you are telling Git to find the parent of the specified commit.",
            "",
            "So saying `master^` is equivalent to \"the first parent of `master`\".",
            "",
            "`master^^` is the grandparent (second-generation ancestor) of `master`",
            "",
            "Let's check out the commit above master here"
          ],
          "afterMarkdowns": [
            "Boom! Done. Way easier than typing the commit hash"
          ],
          "command": "git checkout master^",
          "beforeCommand": "git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "You can also reference `HEAD` as a relative ref. Let's use that a couple of times to move upwards in the commit tree"
          ],
          "afterMarkdowns": [
            "Easy! We can travel backwards in time with `HEAD^`"
          ],
          "command": "git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^",
          "beforeCommand": "git commit; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, check out the parent commit of `bugFix`. This will detach `HEAD`.",
            "",
            "You can specify the hash if you want, but try using relative refs instead!"
          ]
        }
      }
    ]
  },
  "relative-refs2-name": "Relative Refs #2 (~)",
  "relative-refs2-hint": "You'll need to use at least one direct reference (hash) to complete this level",
  "relative-refs2-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### The \"~\" operator",
            "",
            "Say you want to move a lot of levels up in the commit tree. It might be tedious to type `^` several times, so Git also has the tilde (~) operator.",
            "",
            "",
            "The tilde operator (optionally) takes in a trailing number that specifies the number of parents you would like to ascend. Let's see it in action"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's specify a number of commits back with `~`."
          ],
          "afterMarkdowns": [
            "Boom! So concise -- relative refs are great."
          ],
          "command": "git checkout HEAD~4",
          "beforeCommand": "git commit; git commit; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Branch forcing",
            "",
            "You're an expert on relative refs now, so let's actually *use* them for something.",
            "",
            "One of the most common ways I use relative refs is to move branches around. You can directly reassign a branch to a commit with the `-f` option. So something like:",
            "",
            "`git branch -f master HEAD~3`",
            "",
            "moves (by force) the master branch to three parents behind HEAD."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see that previous command in action."
          ],
          "afterMarkdowns": [
            "There we go! Relative refs gave us a concise way to refer to `C1` and branch forcing (`-f`) gave us a way to quickly move a branch to that location."
          ],
          "command": "git branch -f master HEAD~3",
          "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Now that you have seen relative refs and branch forcing in combination, let's use them to solve the next level.",
            "",
            "To complete this level, move `HEAD`, `master`, and `bugFix` to their goal destinations shown."
          ]
        }
      }
    ]
  },
  "reversing-changes-name": "Reversing Changes in Git",
  "reversing-changes-hint": "Notice that revert and reset take different arguments.",
  "reversing-changes-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Reversing Changes in Git",
            "",
            "There are many ways to reverse changes in Git. And just like committing, reversing changes in Git has both a low-level component (staging individual files or chunks) and a high-level component (how the changes are actually reversed). Our application will focus on the latter.",
            "",
            "There are two primary ways to undo changes in Git -- one is using `git reset` and the other is using `git revert`. We will look at each of these in the next dialog",
            ""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "## Git Reset",
            "",
            "`git reset` reverts changes by moving a branch reference backwards in time to an older commit. In this sense you can think of it as \"rewriting history;\" `git reset` will move a branch backwards as if the commit had never been made in the first place.",
            "",
            "Let's see what that looks like:"
          ],
          "afterMarkdowns": [
            "Nice! Git moved the master branch reference back to `C1`; now our local repository is in a state as if `C2` had never happened."
          ],
          "command": "git reset HEAD~1",
          "beforeCommand": "git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "## Git Revert",
            "",
            "While resetting works great for local branches on your own machine, its method of \"rewriting history\" doesn't work for remote branches that others are using.",
            "",
            "In order to reverse changes and *share* those reversed changes with others, we need to use `git revert`. Let's see it in action"
          ],
          "afterMarkdowns": [
            "Weird, a new commit plopped down below the commit we wanted to reverse. That's because this new commit `C2'` introduces *changes* -- it just happens to introduce changes that exactly reverses the commit of `C2`.",
            "",
            "With reverting, you can push out your changes to share with others."
          ],
          "command": "git revert HEAD",
          "beforeCommand": "git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To complete this level, reverse the most recent commit on both `local` and `pushed`. You will revert two commits total (one per branch).",
            "",
            "Keep in mind that `pushed` is a remote branch and `local` is a local branch -- that should help you choose your methods."
          ]
        }
      }
    ]
  },
  "many-rebases-name": "Rebasing over 9000 times",
  "many-rebases-hint": "Remember, the most efficient way might be to only update master at the end...",
  "many-rebases-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Rebasing Multiple Branches",
            "",
            "Man, we have a lot of branches going on here! Let's rebase all the work from these branches onto master.",
            "",
            "Upper management is making this a bit trickier though -- they want the commits to all be in sequential order. So this means that our final tree should have `C7'` at the bottom, `C6'` above that, and so on, all in order.",
            "",
            "If you mess up along the way, feel free to use `reset` to start over again. Be sure to check out our solution and see if you can do it in fewer commands!"
          ]
        }
      }
    ]
  },
  "selective-rebase-name": "Branch Spaghetti",
  "selective-rebase-hint": "Make sure to do everything in the proper order! Branch one first, then two, then three",
  "selective-rebase-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Branch Spaghetti",
            "",
            "WOAHHHhhh Nelly! We have quite the goal to reach in this level.",
            "",
            "Here we have `master` that is a few commits ahead of branches `one` `two` and `three`. For whatever reason, we need to update these three other branches with modified versions of the last few commits on master.",
            "",
            "Branch `one` needs a re-ordering and a deletion of `C5`. `two` needs pure reordering, and `three` only needs one commit!",
            "",
            "We will let you figure out how to solve this one -- make sure to check out our solution afterwards with `show solution`. "
          ]
        }
      }
    ]
  },
  "clone-name": "Clone Intro",
  "clone-hint": "Just git clone!",
  "clone-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Remotes",
            "",
            "Remote repositories aren't actually that complicated. In today's world of cloud computing it's easy to think that there's a lot of magic behind git remotes, but they are actually just copies of your repository on another computer. You can typically talk to this other computer through the Internet, which allows you to transfer commits back and forth.",
            "",
            "That being said, remote repositories have a bunch of great properties:",
            "",
            "- First and foremost, remotes serve as a great backup! Local git repositories have the ability to restore files to a previous state (as you know), but all that information is stored locally. By having copies of your git repository on other computers, you can lose all your local data and still pick up where you left off.",
            "",
            "- More importantly, remotes make coding social! Now that a copy of your project is hosted elsewhere, your friends can contribute to your project (or pull in your latest changes) very easily.",
            "",
            "It's become very popular to use websites that visualize activity around remote repos (like [Github](https://github.com/) or [Phabricator](http://phabricator.org/)), but remote repositories _always_ serve as the underlying backbone for these tools. So it's important to understand them!"
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Our Command to create remotes",
            "",
            "Up until this point, Learn Git Branching has focused on teaching the basics of _local_ repository work (branching, merging, rebasing, etc). However now that we want to learn about remote repository work, we need a command to set up the environment for those lessons. `git clone` will be that command",
            "",
            "Technically, `git clone` in the real world is the command you'll use to create _local_ copies of remote repositories (from github for example). We use this command a bit differently in Learn Git Branching though -- `git clone` actually makes a remote repository out of your local one. Sure it's technically the opposite meaning of the real command, but it helps build the connection between cloning and remote repository work, so let's just run with it for now.",
            ""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Lets start slow and just look at what a remote repository looks like (in our visualization).",
            ""
          ],
          "afterMarkdowns": [
            "There it is! Now we have a remote repository of our project. It looks pretty similar except for some visual changes to make the distinction apparent -- in later levels you'll get to see how we share work across these repositories."
          ],
          "command": "git clone",
          "beforeCommand": ""
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To finish this level, simply `git clone` your existing repository. The real learning will come in following lessons."
          ]
        }
      }
    ]
  },
  "fake-teamwork-name": "Faking Teamwork",
  "fake-teamwork-hint": "remember you can specify the number of commits to fake",
  "fake-teamwork-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Simulating collaboration",
            "",
            "So here is the tricky thing -- for some of these upcoming lessons, we need to teach you how to pull down changes that were introduced in the remote.",
            "",
            "That means we need to essentially \"pretend\" that the remote was updated by one of your coworkers / friends / collaborators, sometimes on a specific branch or a certain number of commits.",
            "",
            "In order to do this, we introduced the aptly-named command `git fakeTeamwork`! It's pretty self explanatory, let's see a demo..."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "The default behavior of `fakeTeamwork` is to simply plop down a commit on master"
          ],
          "afterMarkdowns": [
            "There we go -- the remote was updated with a new commit, and we haven't downloaded that commit yet because we haven't run `git fetch`."
          ],
          "command": "git fakeTeamwork",
          "beforeCommand": "git clone"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "You can also specify the number of commits or the branch by appending them to the command"
          ],
          "afterMarkdowns": [
            "With one command we simulated a teammate pushing three commits to the `foo` branch on our remote"
          ],
          "command": "git fakeTeamwork foo 3",
          "beforeCommand": "git branch foo; git clone"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "The upcoming levels are going to be pretty difficult, so we're asking more of you for this level.",
            "",
            "Go ahead and make a remote (with `git clone`), fake some changes on that remote, commit yourself, and then pull down those changes. It's like a few lessons in one!"
          ]
        }
      }
    ]
  },
  "fetch-name": "Git Fetchin'",
  "fetch-hint": "just run git fetch!",
  "fetch-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Fetch",
            "",
            "Working with git remotes really just boils down to transferring data _to_ and _from_ other repositories. As long as we can send commits back and forth, we can share any type of update that is tracked by git (and thus share work, new files, new ideas, love letters, etc.).",
            "",
            "In this lesson we will learn how to fetch data _from_ a remote repository -- the command for this is conveniently named `git fetch`.",
            "",
            "You'll notice that as we update our representation of the remote repository, our _remote_ branches will update to reflect that new representation. This ties into the previous lesson on remote branches"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Before getting into the details of `git fetch`, let's see it in action! Here we have a remote repository that contains two commits that our local repository does not have."
          ],
          "afterMarkdowns": [
            "There we go! Commits `C2` and `C3` were downloaded to our local repository, and our remote branch `o/master` was updated to reflect this."
          ],
          "command": "git fetch",
          "beforeCommand": "git clone; git fakeTeamwork 2"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### What fetch does",
            "",
            "`git fetch` performs two main steps, and two main steps only. It:",
            "",
            "* downloads the commits that the remote has but are missing from our local repository, and...",
            "* updates where our remote branches point (for instance, `o/master`)",
            "",
            "`git fetch` essentially brings our _local_ representation of the remote repository into synchronization with what the _actual_ remote repository looks like (right now).",
            "",
            "If you remember from the previous lesson, we said that remote branches reflect the state of the remote repositories _since_ you last talked to those remotes. `git fetch` is the way you talk to these remotes! Hopefully the connection between remote branches and `git fetch` is apparent now.",
            "",
            "`git fetch` usually talks to the remote repository through the Internet (via a protocol like `http://` or `git://`).",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### What fetch doesn't do",
            "",
            "`git fetch`, however, does not change anything about _your_ local state. It will not update your `master` branch or change anything about how your file system looks right now.",
            "",
            "This is important to understand because a lot of developers think that running `git fetch` will make their local work reflect the state of the remote. It may download all the necessary data to do that, but it does _not_ actually change any of your local files. We will learn commands in later lessons to do just that :D",
            "",
            "So at the end of the day, you can think of running `git fetch` as a download step."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To finish the level, simply `git fetch` and download all the commits!"
          ]
        }
      }
    ]
  },
  "fetch-args-name": "Fetch arguments",
  "fetch-args-hint": "Pay attention how the commit ids may have swapped! You can read slides again with \"help level\"",
  "fetch-args-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git fetch arguments",
            "",
            "So we've just learned all about git push arguments, this cool `<place>` parameter, and even colon refspecs (`<source>:<destination>`). Can we use all this knowledge for `git fetch` as well?",
            "",
            "You betcha! The arguments for `git fetch` are actually *very, very* similar to those for `git push`. It's the same type of concepts but just applied in the opposite direction (since now you are downloading commits rather than uploading).",
            "",
            "Let's go over the concepts one at a time..."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### The `<place>` parameter",
            "",
            "If you specify a place with git fetch like in the following command:",
            "",
            "`git fetch origin foo`",
            "",
            "Git will go to the `foo` branch on the remote, grab all the commits that aren't present locally, and then plop them down onto the `o/foo` branch locally.",
            "",
            "Let's see this in action (just as a refresher)."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "By specifying a place..."
          ],
          "afterMarkdowns": [
            "We download only the commits from `foo` and place them on `o/foo`"
          ],
          "command": "git fetch origin foo",
          "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "You might be wondering -- why did git plop those commits onto the `o/foo` remote branch rather than just plopping them onto my local `foo` branch? I thought the `<place>` parameter is a place that exists both locally and on the remote?",
            "",
            "Well git makes a special exception in this case because you might have work on the `foo` branch that you don't want to mess up!! This ties into the earlier lesson on `git fetch` -- it doesn't update your local non-remote branches, it only downloads the commits (so you can inspect / merge them later).",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "\"Well in that case, what happens if I explicitly define both the source and destination with `<source>:<destination>`?\"",
            "",
            "If you feel passionate enough to fetch commits *directly* onto a local branch, then yes you can specify that with a colon refspec. You can't fetch commits onto a branch that is checked out, but otherwise git will allow this.",
            "",
            "Here is the only catch though -- `<source>` is now a place on the *remote* and `<destination>` is a *local* place to put those commits. It's the exact opposite of git push, and that makes sense since we are transferring data in the opposite direction!",
            "",
            "That being said, developers rarely do this in practice. I'm introducing it mainly as a way to conceptualize how `fetch` and `push` are quite similar, just in opposite directions."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see this craziness in action:"
          ],
          "afterMarkdowns": [
            "Wow! See, git resolved `foo~1` as a place on the origin and then downloaded those commits to `bar` (which was a local branch). Notice how `foo` and `o/foo` were not updated since we specified a destination."
          ],
          "command": "git fetch origin foo~1:bar",
          "beforeCommand": "git branch foo; git clone; git branch bar; git fakeTeamwork foo 2"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "What if the destination doesn't exist before I run the command? Let's see the last slide but without `bar` existing beforehand."
          ],
          "afterMarkdowns": [
            "See, it's JUST like git push. Git made the destination locally before fetching, just like git will make the destination on remote before pushing (if it doesn't exist)."
          ],
          "command": "git fetch origin foo~1:bar",
          "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "No args?",
            "",
            "If `git fetch` receives no arguments, it just downloads all the commits from the remote onto all the remote branches..."
          ],
          "afterMarkdowns": [
            "Pretty simple, but worth going over just once."
          ],
          "command": "git fetch",
          "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo; git fakeTeamwork master"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Ok, enough talking! To finish this level, fetch just the specified commits in the goal visualization. Get fancy with those commands!",
            "",
            "You will have to specify the source and destination for both fetch commands. Pay attention to the goal visualization since the IDs may be switched around!"
          ]
        }
      }
    ]
  },
  "fetch-rebase-name": "Diverged History",
  "fetch-rebase-hint": "check out the ordering from the goal visualization",
  "fetch-rebase-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Diverged Work",
            "",
            "So far we've seen how to `pull` down commits from others and how to `push` up our own changes. It seems pretty simple, so how can people get so confused?",
            "",
            "The difficulty comes in when the history of the repository *diverges*. Before discussing the details of this, let's see an example...",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Imagine you clone a repository on Monday and start dabbling on a side feature. By Friday you are ready to publish your feature -- but oh no! Your coworkers have written a bunch of code during the week that's made your feature out of date (and obsolete). They've also published these commits to the shared remote repository, so now *your* work is based on an *old* version of the project that's no longer relevant.",
            "",
            "In this case, the command `git push` is ambiguous. If you run `git push`, should git change the remote repository back to what it was on Monday? Should it try to add your code in while not removing the new code? Or should it totally ignore your changes since they are totally out of date?",
            "",
            "Because there is so much ambiguity in this situation (where history has diverged), git doesn't allow you to `push` your changes. It actually forces you to incorporate the latest state of the remote before being able to share your work."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "So much talking! Let's see this situation in action"
          ],
          "afterMarkdowns": [
            "See? Nothing happened because the command fails. `git push` fails because your most recent commit `C3` is based off of the remote at `C1`. The remote has since been updated to `C2` though, so git rejects your push"
          ],
          "command": "git push",
          "beforeCommand": "git clone; git fakeTeamwork; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "How do you resolve this situation? It's easy, all you need to do is base your work off of the most recent version of the remote branch.",
            "",
            "There are a few ways to do this, but the most straightforward is to move your work via rebasing. Let's go ahead and see what that looks like."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Now if we rebase before pushing instead..."
          ],
          "afterMarkdowns": [
            "Boom! We updated our local representation of the remote with `git fetch`, rebased our work to reflect the new changes in the remote, and then pushed them with `git push`"
          ],
          "command": "git fetch; git rebase o/master; git push",
          "beforeCommand": "git clone; git fakeTeamwork; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Are there other ways to update my work when the remote repository has been updated? Of course! Let's check out the same thing but with `merge` instead.",
            "",
            "Although `git merge` doesn't move your work (and instead just creates a merge commit), it's a way to tell git that you have incorporated all the changes from the remote. This is because the remote branch is now an *ancestor* of your own branch, meaning your commit reflects all commits in the remote branch.",
            "",
            "Lets see this demonstrated..."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Now if we merge instead of rebasing..."
          ],
          "afterMarkdowns": [
            "Boom! We updated our local representation of the remote with `git fetch`, *merged* the new work into our work (to reflect the new changes in the remote), and then pushed them with `git push`"
          ],
          "command": "git fetch; git merge o/master; git push",
          "beforeCommand": "git clone; git fakeTeamwork; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Awesome! Is there any way I can do this without typing so many commands?",
            "",
            "Of course -- you already know `git pull` is just shorthand for a fetch and a merge. Conveniently enough, `git pull --rebase` is shorthand for a fetch and a rebase!",
            "",
            "Let's see these shorthand commands at work."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "First with `--rebase`..."
          ],
          "afterMarkdowns": [
            "Same as before! Just a lot shorter."
          ],
          "command": "git pull --rebase; git push",
          "beforeCommand": "git clone; git fakeTeamwork; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "And now with regular `pull`"
          ],
          "afterMarkdowns": [
            "Again, exact same as before!"
          ],
          "command": "git pull; git push",
          "beforeCommand": "git clone; git fakeTeamwork; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "This workflow of fetching, rebase/merging, and pushing is quite common. In future lessons we will examine more complicated versions of these workflows, but for now let's try this out.",
            "",
            "In order to solve this level, take the following steps:",
            "",
            "* Clone your repo",
            "* Fake some teamwork (1 commit)",
            "* Commit some work yourself (1 commit)",
            "* Publish your work via *rebasing*"
          ]
        }
      }
    ]
  },
  "merge-many-features-name": "Merging with remotes",
  "merge-many-features-hint": "Pay attention to the goal tree!",
  "merge-many-features-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Why not merge?",
            "",
            "In order to push new updates to the remote, all you need to do is *incorporate* the latest changes from the remote. That means you can either rebase *or* merge in the remote branch (e.g. `o/master`).",
            "",
            "So if you can do either method, why have the lessons focused on rebasing so far? Why is there no love for `merge` when working with remotes?",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "There's a lot of debate about the tradeoffs between merging and rebasing in the development community. Here are the general pros / cons of rebasing:",
            "",
            "Pros:",
            "",
            "* Rebasing makes your commit tree look very clean since everything is in a straight line",
            "",
            "Cons:",
            "",
            "* Rebasing modifies the (apparent) history of the commit tree.",
            "",
            "For example, commit `C1` can be rebased *past* `C3`. It then appears that the work for `C1'` came after `C3` when in reality it was completed beforehand.",
            "",
            "Some developers love to preserve history and thus prefer merging. Others (like myself) prefer having a clean commit tree and prefer rebasing. It all comes down to preferences :D"
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "For this level, let's try to solve the previous level but with *merging* instead. It may get a bit hairy but it illustrates the point well."
          ]
        }
      }
    ]
  },
  "pull-name": "Git Pullin'",
  "pull-hint": "Just run git pull!",
  "pull-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Pull",
            "",
            "Now that we've seen how to fetch data from a remote repository with `git fetch`, let's update our work to reflect those changes!",
            "",
            "There are actually many ways to do this -- once you have new commits available locally, you can incorporate them as if they were just normal commits on other branches. This means you could execute commands like:",
            "",
            "* `git cherry-pick o/master`",
            "* `git rebase o/master`",
            "* `git merge o/master`",
            "* etc., etc.",
            "",
            "In fact, the workflow of *fetching* remote changes and then *merging* them is so common that git actually provides a command that does both at once! That command is `git pull`."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's first see a `fetch` and a `merge` executed sequentially"
          ],
          "afterMarkdowns": [
            "Boom -- we downloaded `C3` with a `fetch` and then merged in that work with `git merge o/master`. Now our `master` branch reflects the new work from the remote (in this case, named `origin`)"
          ],
          "command": "git fetch; git merge o/master",
          "beforeCommand": "git clone; git commit; git fakeTeamwork"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "What would happen if we used `git pull` instead?"
          ],
          "afterMarkdowns": [
            "The same thing! That should make it very clear that `git pull` is essentially shorthand for a `git fetch` followed by a merge of whatever branch was just fetched."
          ],
          "command": "git pull",
          "beforeCommand": "git clone; git commit; git fakeTeamwork"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "We will explore the details of `git pull` later (including options and arguments), but for now let's try it out in the level.",
            "",
            "Remember -- you can actually solve this level with just `fetch` and `merge`, but it will cost you an extra command :P"
          ]
        }
      }
    ]
  },
  "pull-args-name": "Pull arguments",
  "pull-args-hint": "Remember that you can create new local branches with fetch/pull arguments",
  "pull-args-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git pull arguments",
            "",
            "Now that you know pretty much *everything* there is to know about arguments for `git fetch` and `git push`, there's almost really nothing left to cover for git pull :)",
            "",
            "That's because git pull at the end of the day is *really* just shorthand for a fetch followed by merging in whatever was just fetched. You can think of it as running git fetch with the *same* arguments specified and then merging in *where* those commits ended up.",
            "",
            "This applies even when you use crazy-complicated arguments as well. Let's see some examples:"
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Here are some equivalent commands in git:",
            "",
            "`git pull  origin foo` is equal to:",
            "",
            "`git fetch origin foo; git merge o/foo`",
            "",
            "And...",
            "",
            "`git pull  origin bar~1:bugFix` is equal to:",
            "",
            "`git fetch origin bar~1:bugFix; git merge bugFix`",
            "",
            "See? git pull is really just shorthand for fetch + merge, and all git pull cares about is where the commits ended up (the `destination` argument that it figures out during fetch).",
            "",
            "Lets see a demo:"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "If we specify the place to fetch, everything happens as before with fetch but we merge in whatever was just fetched"
          ],
          "afterMarkdowns": [
            "See! by specifying `master` we downloaded commits onto `o/master` just as normal. Then we merged `o/master` to where we are, *regardless* of what was currently checked out."
          ],
          "command": "git pull origin master",
          "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Does it work with source and destination too? You bet! Let's see that:"
          ],
          "afterMarkdowns": [
            "Wow, that's a TON in one command. We created a new branch locally named `foo`, downloaded commits from remote's master onto that branch `foo`, and then merged that branch into our currently checked out branch `bar`. It's over 9000!!!"
          ],
          "command": "git pull origin master:foo",
          "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Ok to finish up, attain the state of the goal visualization. You'll need to download some commits, make some new branches, and merge those branches into other branches, but it shouldn't take many commands :P"
          ]
        }
      }
    ]
  },
  "push-name": "Git Pushin'",
  "push-hint": "Remember you have to clone before you can push!",
  "push-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Push",
            "",
            "Ok, so I've fetched changes from remote and incorporated them into my work locally. That's great and all... but how do I share _my_ awesome work with everyone else?",
            "",
            "Well, the way to upload shared work is the opposite of downloading shared work. And what's the opposite of `git pull`? `git push`!",
            "",
            "`git push` is responsible for uploading _your_ changes to a specified remote and updating that remote to incorporate your new commits. Once `git push` completes, all your friends can then download  your work from the remote.",
            "",
            "You can think of `git push` as a command to \"publish\" your work. It has a bunch of subtleties that we will get into shortly, but let's start with baby steps...",
            "",
            "*note -- the behavior of `git push` with no arguments varies depending on one of git's settings called `push.default`. The default value for this setting depends on the version of git you're using, but we are going to use the `upstream` value in our lessons. This isn't a huge deal, but it's worth checking your settings before pushing in your own projects.*"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Here we have some changes that the remote does not have. Let's upload them!"
          ],
          "afterMarkdowns": [
            "There we go -- the remote received commit `C2`, the branch `master` on the remote was updated to point at `C2`, and our *own* reflection of the remote (`o/master`) was updated as well. Everything is in sync!"
          ],
          "command": "git push",
          "beforeCommand": "git clone; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To finish this level, simply share two new commits with the remote. Strap in though, because these lessons are about to get a lot harder!"
          ]
        }
      }
    ]
  },
  "push-args-name": "Git push arguments",
  "push-args-hint": "You can always look at the last slide of the dialog with \"objective\"",
  "push-args-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Push arguments",
            "",
            "Great! Now that you know about remote tracking branches we can start to uncover some of the mystery behind how git push, fetch, and pull work. We're going to tackle one command at a time but the concepts between them are very similar.",
            "",
            "First we'll look at `git push`. You learned in the remote tracking lesson that git figured out the remote *and* the branch to push to by looking at the properties of the currently checked out branch (the remote that it \"tracks\"). This is the behavior with no arguments specified, but git push can optionally take arguments in the form of:",
            "",
            "`git push <remote> <place>`",
            "",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "What is a `<place>` parameter you say? We'll dive into the specifics soon, but first an example. Issuing the command:",
            "",
            "`git push origin master`",
            "",
            "translates to this in English:",
            "",
            "*Go to the branch named \"master\" in my repository, grab all the commits, and then go to the branch \"master\" on the remote named \"origin\". Place whatever commits are missing on that branch and then tell me when you're done.*",
            "",
            "By specifying `master` as the \"place\" argument, we told git where the commits will *come from* and where the commits *will go*. It's essentially the \"place\" or \"location\" to synchronize between the two repositories.",
            "",
            "Keep in mind that since we told git everything it needs to know (by specifying both arguments), it totally ignores where we are checked out!"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see an example of specifying the arguments. Note the location where we are checked out in this example."
          ],
          "afterMarkdowns": [
            "There we go! `master` got updated on the remote since we specified those arguments."
          ],
          "command": "git checkout C0; git push origin master",
          "beforeCommand": "git clone; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "What if we hadn't specified the arguments? What would happen?"
          ],
          "afterMarkdowns": [
            "The command fails (as you can see), since `HEAD` is not checked out on a remote-tracking branch."
          ],
          "command": "git checkout C0; git push",
          "beforeCommand": "git clone; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Ok, for this level let's update both `foo` and `master` on the remote. The twist is that `git checkout` is disabled for this level!",
            "",
            "*Note: The remote branches are labeled with `o/` prefixes because the full `origin/` label does not fit in our UI. Don't worry ",
            "about this... simply use `origin` as the name of the remote like normal.*"
          ]
        }
      }
    ]
  },
  "push-args2-name": "Git push arguments -- Expanded!",
  "push-args2-hint": "Remember you can admit defeat and type in \"show solution\" :P",
  "push-args2-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## `<place>` argument details",
            "",
            "Remember from the previous lesson that when we specified `master` as the place argument for git push, we specified both the *source* of where the commits would come from and the *destination* of where the commits would go.",
            "",
            "You might then be wondering -- what if we wanted the source and destination to be different? What if you wanted to push commits from the `foo` branch locally onto the `bar` branch on remote?",
            "",
            "Well unfortunately that's impossible in git... just kidding! Of course it's possible :)... git has tons and tons of flexibility (almost too much).",
            "",
            "Let's see how in the next slide..."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "In order to specify both the source and the destination of `<place>`, simply join the two together with a colon:",
            "",
            "`git push origin <source>:<destination>`",
            "",
            "This is commonly referred to as a colon refspec. Refspec is just a fancy name for a location that git can figure out (like the branch `foo` or even just `HEAD~1`).",
            "",
            "Once you are specifying both the source and destination independently, you can get quite fancy and precise with remote commands. Let's see a demo!"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Remember, `source` is any location that git will understand:"
          ],
          "afterMarkdowns": [
            "Woah! That's a pretty trippy command but it makes sense -- git resolved `foo^` into a location, uploaded whatever commits that weren't present yet on the remote, and then updated destination."
          ],
          "command": "git push origin foo^:master",
          "beforeCommand": "git clone; go -b foo; git commit; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "What if the destination you want to push doesn't exist? No problem! Just give a branch name and git will create the branch on the remote for you."
          ],
          "afterMarkdowns": [
            "Sweet, that's pretty slick :D"
          ],
          "command": "git push origin master:newBranch",
          "beforeCommand": "git clone; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "For this level, try to get to the end goal state shown in the visualization, and remember the format of:",
            "",
            "`<source>:<destination>`"
          ]
        }
      }
    ]
  },
  "push-many-features-name": "Push Master!",
  "push-many-features-hint": "Remember you can always use the undo or reset commands",
  "push-many-features-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Merging feature branches",
            "",
            "Now that you're comfortable with fetching, pulling, and pushing, lets put these skills to the test with a new workflow.",
            "",
            "It's common for developers on big projects to do all their work on feature branches (off of `master`) and then integrate that work only once it's ready. This is similar to the previous lesson (where side branches get pushed to the remote), but here we introduce one more step.",
            "",
            "Some developers only push and pull when on the `master` branch -- that way `master` always stays updated to what is on the remote (`o/master`).",
            "",
            "So for this workflow we combine two things:",
            "",
            "* integrating feature branch work onto `master`, and",
            "* pushing and pulling from the remote"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see a refresher real quick of how to update `master` and push work."
          ],
          "afterMarkdowns": [
            "We executed two commands here that:",
            "",
            "* rebased our work onto new commits from remote, and",
            "* published our work to the remote"
          ],
          "command": "git pull --rebase; git push",
          "beforeCommand": "git clone; git commit; git fakeTeamwork"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "This level is pretty hefty -- here is the general outline to solve:",
            "",
            "* There are three feature branches -- `side1` `side2` and `side3`",
            "* We want to push each one of these features, in order, to the remote",
            "* The remote has since been updated, so we will need to incorporate that work as well",
            "",
            ":O intense! good luck, completing this level is a big step."
          ]
        }
      }
    ]
  },
  "remote-branches-name": "Remote Branches",
  "remote-branches-hint": "Pay attention to the ordering -- commit on master first!",
  "remote-branches-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git Remote Branches",
            "",
            "Now that you've seen `git clone` in action, let's dive into what actually changed.",
            "",
            "The first thing you may have noticed is that a new branch appeared in our local repository called `o/master`. This type of branch is called a _remote_ branch; remote branches have special properties because they serve a unique purpose.",
            "",
            "Remote branches reflect the _state_ of remote repositories (since you last talked to those remote repositories). They help you understand the difference between your local work and what work is public -- a critical step to take before sharing your work with others.",
            "",
            "Remote branches have the special property that when you check them out, you are put into detached `HEAD` mode. Git does this on purpose because you can't work on these branches directly; you have to work elsewhere and then share your work with the remote (after which your remote branches will be updated)."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### What is `o/`?",
            "",
            "You may be wondering what the leading `o/` is for on these remote branches. Well, remote branches also have a (required) naming convention -- they are displayed in the format of:",
            "",
            "* `<remote name>/<branch name>`",
            "",
            "Hence, if you look at a branch named `o/master`, the branch name is `master` and the name of the remote is `o`.",
            "",
            "Most developers actually name their main remote `origin`, not `o`. This is so common that git actually sets up your remote to be named `origin` when you `git clone` a repository.",
            "",
            "Unfortunately the full name of `origin` does not fit in our UI, so we use `o` as shorthand :( Just remember when you're using real git, your remote is probably going to be named `origin`!",
            "",
            "That's a lot to take in, so let's see all this in action."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Lets check out a remote branch and see what happens"
          ],
          "afterMarkdowns": [
            "As you can see, git put us into detached `HEAD` mode and then did not update `o/master` when we added a new commit. This is because `o/master` will only update when the remote updates."
          ],
          "command": "git checkout o/master; git commit",
          "beforeCommand": "git clone"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "To finish this level, commit once off of `master` and once after checking out `o/master`. This will help drive home how remote branches behave differently, and they only update to reflect the state of the remote."
          ]
        }
      }
    ]
  },
  "source-nothing-name": "Source of nothing",
  "source-nothing-hint": "The branch command is disabled for this level so you'll have to use fetch!",
  "source-nothing-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Oddities of `<source>`",
            "",
            "Git abuses the `<source>` parameter in two weird ways. These two abuses come from the fact that you can technically specify \"nothing\" as a valid `source` for both git push and git fetch. The way you specify nothing is via an empty argument:",
            "",
            "* `git push origin :side`",
            "* `git fetch origin :bugFix`",
            "",
            "Let's see what these do..."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "What does pushing \"nothing\" to a remote branch do? It deletes it!"
          ],
          "afterMarkdowns": [
            "There, we successfully deleted the `foo` branch on remote by pushing the concept of \"nothing\" to it. That kinda makes sense..."
          ],
          "command": "git push origin :foo",
          "beforeCommand": "git clone; git push origin master:foo"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Finally, fetching \"nothing\" to a place locally actually makes a new branch"
          ],
          "afterMarkdowns": [
            "Very odd / bizarre, but whatever. That's git for you!"
          ],
          "command": "git fetch origin :bar",
          "beforeCommand": "git clone"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "This is a quick level -- just delete one remote branch and create a new branch with `git fetch` to finish!"
          ]
        }
      }
    ]
  },
  "tracking-name": "Remote Tracking",
  "tracking-hint": "Remember there are two ways to set remote tracking!",
  "tracking-start-dialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Remote-Tracking branches",
            "",
            "One thing that might have seemed \"magical\" about the last few lessons is that git knew the `master` branch was related to `o/master`. Sure these branches have similar names and it might make logical sense to connect the `master` branch on the remote to the local `master` branch, but this connection is demonstrated clearly in two scenarios:",
            "",
            "* During a pull operation, commits are downloaded onto `o/master` and then *merged* into the `master` branch. The implied target of the merge is determined from this connection.",
            "* During a push operation, work from the `master` branch was pushed onto the remote's `master` branch (which was then represented by `o/master` locally). The *destination* of the push is determined from the connection between `master` and `o/master`.",
            ""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Remote tracking",
            "",
            "Long story short, this connection between `master` and `o/master` is explained simply by the \"remote tracking\" property of branches. The `master` branch is set to track `o/master` -- this means there is an implied merge target and implied push destination for the `master` branch.",
            "",
            "You may be wondering how this property got set on the `master` branch when you didn't run any commands to specify it. Well, when you clone a repository with git, this property is actually set for you automatically. ",
            "",
            "During a clone, git creates a remote branch for every branch on the remote (aka branches like `o/master`). It then creates a local branch that tracks the currently active branch on the remote, which is `master` in most cases.",
            "",
            "Once git clone is complete, you only have one local branch (so you aren't overwhelmed) but you can see all the different branches on the remote (if you happen to be very curious). It's the best of both worlds!",
            "",
            "This also explains why you may see the following command output when cloning:",
            "",
            "    local branch \"master\" set to track remote branch \"o/master\""
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Can I specify this myself?",
            "",
            "Yes you can! You can make any arbitrary branch track `o/master`, and if you do so, that branch will have the same implied push destination and merge target as `master`. This means you can run `git push` on a branch named `totallyNotMaster` and have your work pushed to the `master` branch on the remote!",
            "",
            "There are two ways to set this property. The first is to checkout a new branch by using a remote branch as the specified ref. Running",
            "",
            "`git checkout -b totallyNotMaster o/master`",
            "",
            "Creates a new branch named `totallyNotMaster` and sets it to track `o/master`."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Enough talking, let's see a demonstration! We will checkout a new branch named `foo` and set it to track `master` on the remote."
          ],
          "afterMarkdowns": [
            "As you can see, we used the implied merge target of `o/master` to update the `foo` branch. Note how master doesn't get updated!!"
          ],
          "command": "git checkout -b foo o/master; git pull",
          "beforeCommand": "git clone; git fakeTeamwork"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "This also applies for git push"
          ],
          "afterMarkdowns": [
            "Boom. We pushed our work to the `master` on the remote even though our branch was named something totally different"
          ],
          "command": "git checkout -b foo o/master; git commit; git push",
          "beforeCommand": "git clone"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "### Way #2",
            "",
            "Another way to set remote tracking on a branch is to simply use the `git branch -u` option. Running",
            "",
            "`git branch -u o/master foo`",
            "",
            "will set the `foo` branch to track `o/master`. If `foo` is currently checked out you can even leave it off:",
            "",
            "`git branch -u o/master`",
            ""
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            "Let's see this other way of specifying remote tracking real quick..."
          ],
          "afterMarkdowns": [
            "Same as before, just a more explicit command. Sweet!"
          ],
          "command": "git branch -u o/master foo; git commit; git push",
          "beforeCommand": "git clone; git checkout -b foo"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "Ok! For this level let's push work onto the `master` branch on remote while *not* checked out on `master` locally. I'll let you figure out the rest since this is the advanced course :P"
          ]
        }
      }
    ]
  },
  "sequence-intro-display": "Introduction Sequence",
  "sequence-intro-about": "A nicely paced introduction to the majority of git commands",
  "sequence-rampup-display": "Ramping Up",
  "sequence-rampup-about": "The next serving of 100% git awesomes-ness. Hope you're hungry",
  "sequence-remote-display": "Push & Pull -- Git Remotes!",
  "sequence-remote-about": "Time to share your 1's and 0's kids; coding just got social",
  "sequence-remote-advanced-display": "To Origin And Beyond -- Advanced Git Remotes!",
  "sequence-remote-advanced-about": "And you thought being a benevolent dictator would be fun...",
  "sequence-move-display": "Moving Work Around",
  "sequence-move-about": "Get comfortable with modifying the source tree",
  "sequence-mixed-display": "A Mixed Bag",
  "sequence-mixed-about": "A mixed bag of Git techniques, tricks, and tips",
  "sequence-advanced-display": "Advanced Topics",
  "sequence-advanced-about": "For the truly brave!",
  "dialogs-confirm": [
    {
      "type": "ModalAlert",
      "options": {
        "markdowns": [
          "## Are you sure you want to see the solution?",
          "",
          "I believe in you! You can do it"
        ]
      }
    }
  ],
  "dialogs-level-builder": [
    {
      "type": "ModalAlert",
      "options": {
        "markdowns": [
          "## Welcome to the level builder!",
          "",
          "Here are the main steps:",
          "",
          "  * Set up the initial environment with git commands",
          "  * Define the starting tree with ```define start```",
          "  * Enter the series of git commands that compose the (optimal) solution",
          "  * Define the goal tree with ```define goal```. Defining the goal also defines the solution",
          "  * Optionally define a hint with ```define hint```",
          "  * Edit the name with ```define name```",
          "  * Optionally define a nice start dialog with ```edit dialog```",
          "  * Enter the command ```finish``` to output your level JSON!"
        ]
      }
    }
  ],
  "dialogs-next-level": [
    {
      "type": "ModalAlert",
      "options": {
        "markdowns": [
          "## Great Job!!",
          "",
          "You solved the level in *{numCommands}* command(s); ",
          "our solution uses {best}."
        ]
      }
    }
  ],
  "dialogs-sandbox": [
    {
      "type": "ModalAlert",
      "options": {
        "markdowns": [
          "## Welcome to Learn Git Branching",
          "",
          "Interested in learning Git? Well you've come to the right place! ",
          "\"Learn Git Branching\" is the most visual and interactive way to learn Git ",
          "on the web; you'll be challenged with exciting levels, given step-by-step ",
          "demonstrations of powerful features, and maybe even have a bit of fun along the way.",
          "",
          "After this dialog you'll see the variety of levels we have to offer. If you're a ",
          "beginner, just go ahead and start with the first. If you already know some Git basics, ",
          "try some of our later more challenging levels.",
          "",
          "You can see all the commands available with `show commands` at the terminal.",
          "",
          "PS: Want to go straight to a sandbox next time?",
          "Try out ",
          "[this special link](https://pcottle.github.io/learnGitBranching/?NODEMO)"
        ]
      }
    }
  ],
  "finish-dialog-finished": "Wow! You finished the last level, great!",
  "finish-dialog-next": "Would you like to move on to *\"{nextLevel}\"*, the next level?",
  "finish-dialog-win": "Awesome! You matched or exceeded our solution.",
  "finish-dialog-lose": "See if you can whittle it down to {best} :D",
  "hg-prune-tree": "Warning! Mercurial does aggressive garbage collection and thus needs to prune your tree",
  "hg-a-option": "The -A option is not needed for this app, just commit away!",
  "hg-error-no-status": "There is no status command for this app, since there is no staging of files. Try hg summary instead",
  "hg-error-need-option": "I need the option {option} for that command!",
  "hg-error-log-no-follow": "hg log without -f is currently not supported, use -f",
  "git-status-detached": "Detached head!",
  "git-status-onbranch": "On branch {branch}",
  "git-status-readytocommit": "Ready to commit! (as always in this demo)",
  "git-dummy-msg": "Quick commit. Go Bears!",
  "git-error-origin-fetch-uptodate": "Already up to date!",
  "git-error-origin-fetch-no-ff": "Your origin branch is out of sync with the remote branch and fetch cannot be performed",
  "git-error-origin-push-no-ff": "The remote repository has diverged from your local repository, so uploading your changes is not a simple fast forward (and thus your push was rejected). Please pull down the new changes in the remote repository, incorporate them into this branch, and try again. You can do so with git pull or git pull --rebase",
  "git-error-remote-branch": "You cannot execute that command on a remote branch",
  "git-error-origin-required": "An origin is required for that command",
  "git-error-origin-exists": "An origin already exists! You cannot make a new one",
  "git-error-branch": "You can't delete the master branch, the branch you are on, or things that aren't branches",
  "git-merge-msg": "Merge {target} into {current}",
  "git-error-rebase-none": "No commits to rebase! Everything is a merge commit or changes already applied",
  "git-result-nothing": "Nothing to do...",
  "git-result-fastforward": "Fast forwarding...",
  "git-result-uptodate": "Branch already up-to-date",
  "git-error-exist": "The ref {ref} does not exist or is unknown",
  "git-error-relative-ref": "Commit {commit} does not have a {match}",
  "git-warning-detached": "Warning!! Detached HEAD state",
  "git-warning-add": "No need to add files in this demo",
  "git-error-options": "Those options you specified are incompatible or incorrect",
  "git-error-already-exists": "The commit {commit} already exists in your changes set, aborting!",
  "git-error-reset-detached": "Can't reset in detached head! Use checkout if you want to move",
  "git-warning-hard": "The default behavior for resets on LearnGitBranching is a --hard, so feel free to omit that option if you get tired of typing it out in our lessons. Just remember that the default behavior on actual Git is --mixed.",
  "git-error-staging": "There is no concept of adding / staging files, so that option or command is invalid!",
  "git-revert-msg": "Reverting {oldCommit}: {oldMsg}",
  "git-error-args-many": "I expect at most {upper} argument(s) for {what}",
  "git-error-args-few": "I expect at least {lower} argument(s) for {what}",
  "git-error-no-general-args": "That command accepts no general arguments",
  "copy-tree-string": "Copy the tree string below",
  "learn-git-branching": "Learn Git Branching",
  "select-a-level": "Select a level",
  "main-levels-tab": "Main",
  "remote-levels-tab": "Remote",
  "branch-name-short": "Sorry, we need to keep branch names short for the visuals. Your branch name was truncated to 9 characters, resulting in \"{branch}\"",
  "bad-branch-name": "That branch name \"{branch}\" is not allowed!",
  "bad-tag-name": "That tag name \"{tag}\" is not allowed!",
  "option-not-supported": "The option \"{option}\" is not supported!",
  "git-usage-command": "git <command> [<args>]",
  "git-supported-commands": "Supported commands:",
  "git-usage": "Usage:",
  "git-version": "Git Version PCOTTLE.1.0",
  "flip-tree-command": "Flipping tree...",
  "refresh-tree-command": "Refreshing tree...",
  "locale-command": "Locale set to {locale}",
  "locale-reset-command": "Locale reset to default, which is {locale}",
  "show-command": "Please use one of the following commands for more info:",
  "show-all-commands": "Here is a list of all the commmands available:",
  "cd-command": "Directory changed to \"/directories/dont/matter/in/this/demo\"",
  "ls-command": "DontWorryAboutFilesInThisDemo.txt",
  "mobile-alert": "LGB can't receive input on mobile, visit on desktop! it's worth it :D",
  "share-tree": "Share this tree with friends! They can load it with \"import tree\"",
  "paste-json": "Paste a JSON blob below!",
  "solved-map-reset": "Solved map was reset, you are starting from a clean slate!",
  "level-cant-exit": "You are not in a level! You are in a sandbox, start a level with \"levels\"",
  "level-no-id": "A level for that id \"{id}\" was not found! Opening up a level selection view",
  "undo-stack-empty": "The undo stack is empty!",
  "already-solved": "You have already solved this level, try other levels with \"levels\" or go back to sandbox with \"sandbox\"",
  "solved-level": "Solved!!\n:D",
  "command-disabled": "That git command is disabled for this level!",
  "share-json": "Here is the JSON for this level! Share it with someone or send it to me on Github",
  "want-start-dialog": "You have not specified a start dialog, would you like to add one?",
  "want-hint": "You have not specified a hint, would you like to add one?",
  "prompt-hint": "Enter the hint for this level, or leave this blank if you do not want to include one",
  "prompt-name": "Enter the name for the level",
  "solution-empty": "Your solution is empty!! Something is amiss",
  "define-start-warning": "Defining start point... solution and goal will be overwritten if they were defined earlier",
  "help-vague-level": "You are in a level, so multiple forms of help are available. Please select either \"help level\" to learn more about this lesson, \"help general\" for using Learn GitBranching, or \"objective\" to learn about how to solve the level.",
  "help-vague-builder": "You are in a level builder, so multiple forms of help are available. Please select either \"help general\" or \"help builder\"",
  "show-goal-button": "Show Goal",
  "hide-goal-button": "Hide Goal",
  "objective-button": "Instructions",
  "git-demonstration-title": "Git Demonstration",
  "goal-to-reach": "Goal To Reach",
  "goal-only-master": "<span class=\"fwber\">Note:</span> Only the master branch will be checked in this level. The other branches are simply for reference (shown as dashed labels below). As always, you can hide this dialog with \"hide goal\"",
  "hide-goal": "You can hide this window with \"hide goal\"",
  "hide-start": "You can hide this window with \"hide start\"",
  "level-builder": "Level Builder",
  "no-start-dialog": "There is no start dialog to show for this level!",
  "no-hint": "Hmm, there doesn't seem to be a hint for this level :-/",
  "error-untranslated-key": "The translation for {key} does not exist yet :( Please hop on github and offer up a translation!",
  "error-untranslated": "This dialog or text is not yet translated in your locale :( Hop on github to aid in translation!"
};
