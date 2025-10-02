import React, { Children, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { height } = Dimensions.get("window");

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const Modal = ({ children, visible, onClose }: Props) => {
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      // Animar hacia arriba
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Animar hacia abajo
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <View style={styles.overlay} pointerEvents={visible ? "auto" : "none"}>
      {/* Fondo semi-transparente */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={visible && styles.background} />
      </TouchableWithoutFeedback>

      {/* Contenedor animado */}
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 200,
  },
});

export default Modal;
