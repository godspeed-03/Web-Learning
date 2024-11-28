callfunction() {
    echo "Enter your user name"
    read USER_NAME
    echo "Okay ${USER_NAME}, Let's play a game"
    echo "Do you want to play it? (yes/no)"
    read USER_CONSENT

    if [ "${USER_CONSENT}" = "yes" ]; then
        echo "Let's play the game together!"
        echo "Choose any number between 1 to 6"
        read USER_NUMBER

        case ${USER_NUMBER} in
            3)
                echo "I like 3 too. You're the winner!"
                ;;
            5)
                echo "Nice guess, but you're not the winner."
                ;;
            *)
                echo "Better luck next time! You lost."
                ;;
        esac
    else
        echo "Ow! Let's play next time."
    fi
}


callfunction



