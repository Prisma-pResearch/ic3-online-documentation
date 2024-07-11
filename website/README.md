# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


# MDX/MD Guide
[2:47 PM] Zhu, Ruilin
# Guidance in the mdx/md
- import Image from '@theme/IdealImage';
    <Image img={require('./tablerelations.png')} />
- downlaod a file
[Download the handbook](./ai2.pdf)
- Jump to header
  [Go to header 1](#header-to-jump)
  ``` ### header-to-jump ```
- Jump to id
    [Go to id 1](#id-to-jump)
    <a id="id-to-jump">this is id == "id-to-jump" </a>
- Jump to another file's section
  [Go to md](./file-path.md#header-to-jump)
- image
  ![Alt Text](/path/to/img.jpg)
 


# Dev note
### Installation, Local Development, Build

```
$ yarn, yarn start, yarn build; npm
```

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# sidebars
setting files: /sidebars
notes: currently all files & path are generated automatically

# nav bar and files
path /pages


