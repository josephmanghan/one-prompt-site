#!/bin/bash

# Deployment script for one-prompt-site to GitHub Pages
# Pushes dist/ contents to josephmanghan.github.io

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== GitHub Pages Deployment ===${NC}"
echo

# Navigate to project root if in scripts directory
if [ ! -f "package.json" ]; then
    if [ -f "../package.json" ]; then
        cd ..
    else
        echo -e "${RED}Error: package.json not found.${NC}"
        exit 1
    fi
fi

echo -e "${YELLOW}This will:${NC}"
echo "  1. Build the project (npm run build)"
echo "  2. Push dist/ contents to josephmanghan.github.io main branch"
echo

read -p "Continue with deployment? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Cancelled.${NC}"
    exit 1
fi

# Build
echo -e "${YELLOW}Building project...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"

# Deploy by initializing git in dist and pushing
echo -e "${YELLOW}Deploying to GitHub Pages...${NC}"

# Create CNAME file if it doesn't exist
if [ ! -f "dist/CNAME" ]; then
    echo -e "${YELLOW}Creating CNAME file...${NC}"
    echo "www.josephmanghan.com" > dist/CNAME
fi

cd dist
rm -rf .git
git init
git remote add origin https://github.com/josephmanghan/josephmanghan.github.io.git
git branch -M main
git add .
git commit -m "Deploy site - $(date)"
git push -u origin main --force
cd ..

echo
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}Your site should be live at: https://www.josephmanghan.com${NC}"
