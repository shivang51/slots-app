import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import React, { Ref, createRef, useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ForgotPasswordStackNavigation } from "./FPIndex";
import { Colors, GStyles } from "@/utils/GlobalStyles";
import PrimaryButton from "@/components/PrimaryButton";
import TextBox from "@/components/TextBox";
import TextButton from "@/components/TextButton";
import DropShadow from "react-native-drop-shadow";

export const FORGOT_PASSWORD_PAGE_1_ID: string = "/email";

interface IForm {
  otp: string;
}

const VerifyId = () => {
  const [form, setForm] = useState<IForm>({ otp: "______" });

  const [focusNodes, setFocusNodes] = useState<Array<TextInput | undefined>>(
    Array.from({ length: 6 }, (_, __) => undefined)
  );

  const navigator = useNavigation<ForgotPasswordStackNavigation>();

  const setFocusNode = (ind: number, input: TextInput | null) => {
    focusNodes[ind] = input ?? undefined;
    setFocusNodes(focusNodes);
  };

  const onValueChange = (_: string, value: string, ind: number) => {
    if (ind == 0 && !value) {
      setForm({ otp: "______" });
      return;
    }

    if (!value) value = "_";
    let new_otp =
      form.otp.substring(0, ind) + value + form.otp.substring(ind + 1);
    setForm({ otp: new_otp });

    if (ind >= focusNodes.length) return;
    focusNodes[value == "_" ? ind - 1 : ind + 1]?.focus();
  };

  const onKeyPress = (
    index: number,
    evt: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (evt.nativeEvent.key === "Backspace" && index != 0) {
      focusNodes[index - 1]?.focus();
      let new_otp =
        form.otp.substring(0, index - 1) +
        "_" +
        form.otp.substring(index - 1 + 1);
      setForm({ otp: new_otp });
      console.log("otp: ", new_otp);
    } else if (evt.nativeEvent.key === "Backspace" && index == 0) {
      focusNodes[index]?.clear();
      setForm({ otp: "______" });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading1}>Enter The Verification Code</Text>
        <Text style={styles.subTitle}>
          Check your Email for the verification code and enter it below, the
          code can take upto 5 minutes.
        </Text>
      </View>
      <View style={[GStyles.width_100, { marginBottom: 32 }]}>
        <View style={styles.textboxes}>
          {Array.from({ length: 6 }, (_, k) => {
            let shadow = focusNodes[k]?.isFocused()
              ? styles.highlighted
              : undefined;

            return (
              <TextBox
                carretHidden={true}
                key={k}
                containerStyle={{
                  alignSelf: "flex-start",
                  flexDirection: "column",
                }}
                style={{ textAlign: "center", ...shadow }}
                placeholder={"_"}
                name={`otp_${k}`}
                value={form.otp[k] == "_" ? "" : form.otp[k]}
                onValueChange={onValueChange}
                maxLength={1}
                setFocusNode={setFocusNode}
                index={k}
                onKeyPress={onKeyPress}
              />
            );
          })}
        </View>
        <PrimaryButton
          label="Verify"
          onPress={() => {
            navigator.navigate("new_password");
          }}
          margin_top={8}
        />
      </View>
      <TextButton label="Didn’t Recieve? Resend Code" />
    </View>
  );
};

export default VerifyId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  heading1: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "400",
    textAlign: "left",
    marginBottom: 16,
  },
  textboxes: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  highlighted: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    elevation: 20,
    borderWidth: 2,
  },
});
