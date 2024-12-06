#!/bin/bash

# Define color codes
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
MAGENTA="\033[0;35m"
CYAN="\033[0;36m"
WHITE="\033[0;37m"
GRAY="\033[0;90m"
LRED="\033[0;91m"
GREEN="\033[0;92m"
YELLOW="\033[0;93m"
BLUE="\033[0;94m"
MAGENTA="\033[0;95m"
CYAN="\033[0;96m"
WHITE="\033[0;97m"
RESET="\033[0m" # Reset color to default

if ! git diff --exit-code >/dev/null; then

    commit_types=("updt" "fix" "feat" "docs" "lint")

    commit_prefix=$(echo "${commit_types[@]}" | tr ' ' '\n' | fzf --prompt="Select commit type: " --height=10)

    if [[ "$commit_prefix" == "other" ]]; then
        echo -e "${MAGENTA}Enter custom prefix: ${RESET}"
        read commit_prefix
    fi

    if [ -z "$commit_prefix" ]; then
        echo -e "${RED}Invalid selection or aborted.${RESET}"
        exit 1
    fi

    while true; do
        echo -e "${YELLOW}Enter the commit message:${RESET}"
        read commit_message
        if [ -z "$commit_message" ]; then
            echo -e "${RED}Commit message cannot be empty. Please enter a valid message.${RESET}"
        else
            break
        fi
    done

    full_message="$commit_prefix: $commit_message"

    git cma "$full_message"
    echo -e "${GREEN}Committed to branch $(git branch --show-current) with message: ${GRAY}$full_message${RESET}"

    echo -e "${YELLOW}Do you want to push to ${BLUE} origin $RESET} [${RESET}${GREEN} Y ${RESET}/${RED} N ${RESET}${YELLOW}]: ${RESET} ${CYAN} (ENTER to abort) ${RESET}"
    read STREAM_CHOICE

    STREAM_CHOICE=${STREAM_CHOICE:-o}

    STREAM_CHOICE=$(echo "$STREAM_CHOICE" | tr '[:upper:]' '[:lower:]')

    if [[ "$STREAM_CHOICE" == "y" ]]; then
        STREAM_NAME="origin"
    elif [[ "$STREAM_CHOICE" == "n" ]]; then
        echo -e "${YELLOW}Do you want to push to upstream instead? [${RESET}${GREEN} Y ${RESET}/${RED} N ${RESET}${YELLOW}]"
        read REMOTE_CHOICE
        REMOTE_CHOICE=${REMOTE_CHOICE:-y}
        REMOTE_CHOICE=$(echo "$REMOTE_CHOICE" | tr '[:upper:]' '[:lower:]')

        if [[ "$REMOTE_CHOICE" == "y" ]]; then
            STREAM_NAME="upstream"
        elif [[ "$REMOTE_CHOICE" == "n" ]]; then
            echo -e "${MAGENTA}Enter the name of the remote you want to push to (e.g., upstream or any other): ${RESET}"
            read STREAM_NAME
            if ! git remote get-url "$STREAM_NAME" >/dev/null 2>&1; then
                echo -e "${RED}Remote '$STREAM_NAME' does not exist. Aborting.${RESET}"
                exit 1
            fi
        else
            echo -e "${RED}Invalid input. Aborting.${RESET}"
            exit 1
        fi
    elif [[ "$STREAM_CHOICE" == "o" ]]; then
        echo -e "${MAGENTA}Aborting push.${RESET}"
        exit 0
    else
        echo -e "${RED}Invalid input. Aborting......${RESET}"
        exit 1
    fi

    echo -e "${BLUE}Pushing to ${STREAM_NAME}...${RESET}"

    git push -u $STREAM_NAME $(git branch --show-current)

else

    echo -e "${RED}No changes detected. Aborting commit.${RESET}"
    exit 0
fi
