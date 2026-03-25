import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#f3f4f6",
    },
    hero: {
        width: "100%",
        maxWidth: 520,
        borderRadius: 18,
        padding: 18,
        gap: 6,
        borderWidth: 1,
        borderColor: "rgba(103, 96, 96, 0.1)",
    },
    heroText: {
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        color: "white",
        letterSpacing: 0.3,
        backgroundColor: "#A8DCD9",
    },
    menu: {
        backgroundColor: "#f3f4f6",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    menuBtn: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    menuBtnHover: {
        backgroundColor: "#e9e9e9",
        transform: [{ scale: 1.01 }],
    },
    menuLabel: {
        fontSize: 18,
        marginRight: 10,
        color: "black",
    },
    menuTxt: {
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        textAlign: "center",
    }
});