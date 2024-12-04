import { EmojiType } from "@/typings/emoji.types";
import { Button } from "../../../components/ui/button";
import ReactEmojis from "@souhaildev/reactemojis";

interface EmojiButtonProps {
    emoji: EmojiType;
    onClick: (emoji: EmojiType) => void;
}

function EmojiButton({ emoji, onClick }: EmojiButtonProps): JSX.Element {
    return (
        <Button variant="icon" size="icon" onClick={() => onClick(emoji)}>
            <ReactEmojis emoji={emoji} emojiStyle="3" style={{ width: 40, height: 40 }} />
        </Button>
    );
};

export default EmojiButton;
