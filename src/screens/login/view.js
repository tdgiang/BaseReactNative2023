import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import TextField from '../../components/Input/TextField';
import {useForm, Controller} from 'react-hook-form';
import R from '../../assets/R';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';
const LoginView = ({onLogin}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 225,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              title={'Mã phẩm giống'}
              required
              value={value}
              onChangeText={onChange}
              error={errors.code}
            />
          )}
          name="code"
        />
        <Button title={'Lưu'} onPress={handleSubmit(onLogin)} />
      </View>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
});
