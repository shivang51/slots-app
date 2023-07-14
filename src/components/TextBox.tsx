import {
  View,
  Pressable,
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import React, { useState } from "react";
import { Colors, GStyles } from "../utils/GlobalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface IProps {
  carretHidden?: boolean;
  placeholder: string;
  password?: boolean;
  name?: string;
  value?: string;
  onValueChange?: (name: string, value: string, ind: number) => void;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  maxLength?: number;
  index?: number;
  setFocusNode?: (index: number, input: TextInput | null) => void;
  onKeyPress?: (
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => void;
  editable?: boolean;
}

const TextBox = (props: IProps) => {
  const [obscureText, setObscureText] = useState(props.password ?? false);

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        editable={props.editable ?? true}
        caretHidden={props.carretHidden ?? false}
        onKeyPress={(e) =>
          props.onKeyPress ? props.onKeyPress(props.index ?? -1, e) : null
        }
        style={[styles.input, props.style]}
        onChangeText={(value) =>
          props.onValueChange
            ? props.onValueChange(
                props.name ?? "NONAME",
                value,
                props.index ?? -1
              )
            : null
        }
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={(props.password ?? false) && obscureText}
        maxLength={props.maxLength}
        ref={(input) =>
          props.setFocusNode
            ? props.setFocusNode(props.index ?? -1, input)
            : null
        }
      />
      {props.password ? (
        <Pressable
          onPress={() => setObscureText(!obscureText)}
          style={styles.icon}
        >
          <Icon
            name={!obscureText ? "visibility" : "visibility-off"}
            size={32}
            color={Colors.black}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 12,
    fontSize: 15,
  },

  container: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  icon: {
    position: "absolute",
    right: 16,
  },
});
