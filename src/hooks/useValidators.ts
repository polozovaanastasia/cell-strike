import { FileType } from "@/components/Game/SettingsForm/EnemyFileInput/EnemyFileInput";

export const useValidators = () => {
    const validateImageUrl = async (url: string) => {
        const isImageUrl = await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });

        return isImageUrl;
    };

    const validateFileType = (file: FileType) => {
        let isImageFile;

        if (file) {
            isImageFile = file.type.startsWith("image/");
        }
        return isImageFile;
    };

    return { validateImageUrl, validateFileType };
};
