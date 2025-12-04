#!/bin/bash

# Deployment script for one-prompt-site to GitHub Pages
# Uses git subtree to push dist/ contents to josephmanghan.github.io

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

# Add github-pages remote if it doesn't exist
if ! git remote | grep -q "github-pages"; then
    echo -e "${YELLOW}Adding github-pages remote...${NC}"
    git remote add github-pages https://github.com/josephmanghan/josephmanghan.github.io.git
    echo -e "${GREEN}✓ Remote added${NC}"
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

# Deploy using git subtree
echo -e "${YELLOW}Deploying to GitHub Pages...${NC}"
git subtree push --prefix dist github-pages main

echo
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}Your site should be live at: https://www.josephmanghan.com${NC}"
