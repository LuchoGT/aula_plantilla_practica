import { User } from "@/interfaces/user";
import "./ProfilePage.scss";
import { useForm } from "react-hook-form";
import { InputField } from "@/modules/auth/components/InputField/InputField";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import imagen from "../../../../images/imagenfoto.webp";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Edit } from "@mui/icons-material";
import { useAuthStore } from "@/hooks/useAuthStore";
export const ProfilePage = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
  } = useForm<User>();

  const { user, updateUserProfile } = useAuthStore();

  const onSubmit = (data: User) => {
    // const { name } = data;
    updateUserProfile(user.id, data);
    reset();
  };

  const defaultImage = imagen;

  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(defaultImage);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  // const { password, profile, email, phone, photo } = user || {};

  const [name, setName] = useState(user?.name || "");
  // useEffect(() => {
  //   setValue('name', user?.name || '');
  //   setValue('password', password || '');
  //   setValue('profile', profile || '');
  //   setValue('email', email || '');
  //   setValue('phone', phone || 0);
  //   setValue('photo', photo || '');
  // }, [name, password, profile, email, phone, photo, setValue]);

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  return (
    // <main className="profile">
    //   <section className="container">
    //     <h1>Mi Perfil</h1>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div className="photo">
    //         {selectedImage && (
    //           <div className="image-container">
    //             <img
    //               src={selectedImage as string}
    //               alt="Uploaded"
    //               className="circular-image"
    //             />
    //             <Edit onClick={handleIconClick}  className="upload-icon" />
    //           </div>
    //         )}
    //         <input
    //           type="file"
    //           accept="image/*"
    //           onChange={handleImageChange}
    //           ref={fileInputRef}
    //           style={{ display: "none" }}
    //         />
    //       </div>
    //       <InputField
    //         type="text"
    //         label="Nombres"
    //         name="names"
    //         register={register}
    //         error={errors.names}
    //       />
    //       <InputField
    //         type="text"
    //         label="Apellidos"
    //         name="surname"
    //         register={register}
    //         error={errors.surname}
    //       />
    //       <InputField
    //         type="email"
    //         label="Correo"
    //         name="email"
    //         register={register}
    //         error={errors.email}
    //       />
    //       <InputField
    //         type="password"
    //         label="Password"
    //         name="password"
    //         register={register}
    //         error={errors.password}
    //       />
    //       <InputField
    //         type="text"
    //         label="Usuario"
    //         name="name"
    //         value={name}
    //         register={register}
    //         error={errors.name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <InputField
    //         type="text"
    //         label="Celular"
    //         name="phone"
    //         register={register}
    //         error={errors.phone}
    //       />
    //       <Button color="secondary" variant="contained" type="submit">
    //         Guardar mis datos
    //       </Button>
    //     </form>
    //   </section>
    // </main>
    // <main className="profile">
    //   <h1>Mi Perfil</h1>
    //   <Stack width={400}>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div className="photo">
    //         {selectedImage && (
    //           <div className="image-container">
    //             <img
    //               src={selectedImage as string}
    //               alt="Uploaded"
    //               className="circular-image"
    //             />
    //             <Edit onClick={handleIconClick} className="upload-icon" />
    //           </div>
    //         )}
    //         <input
    //           type="file"
    //           accept="image/*"
    //           onChange={handleImageChange}
    //           ref={fileInputRef}
    //           style={{ display: "none" }}
    //         />
    //       </div>
    //       <InputField
    //         type="text"
    //         label="Nombres"
    //         name="names"
    //         register={register}
    //         error={errors.names}
    //       />
    //       <InputField
    //         type="text"
    //         label="Apellidos"
    //         name="surname"
    //         register={register}
    //         error={errors.surname}
    //       />
    //       <InputField
    //         type="email"
    //         label="Correo"
    //         name="email"
    //         register={register}
    //         error={errors.email}
    //       />
    //       <InputField
    //         type="password"
    //         label="Password"
    //         name="password"
    //         register={register}
    //         error={errors.password}
    //       />
    //       <InputField
    //         type="text"
    //         label="Usuario"
    //         name="name"
    //         value={name}
    //         register={register}
    //         error={errors.name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <InputField
    //         type="text"
    //         label="Celular"
    //         name="phone"
    //         register={register}
    //         error={errors.phone}
    //       />
    //       <Button color="secondary" variant="contained" type="submit">
    //         Guardar mis datos
    //       </Button>
    //     </form>
    //   </Stack>
    // </main>
    <Grid
      container
      spacing={0}
      direction="column"
      sx={{ minHeight: "100vh", backgroundColor: "#1D1A2380", padding: 4 }}
    >
      <Typography>Mi Perfil</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__photo">
          {selectedImage && (
            <div className="image-container">
              <img
                src={selectedImage as string}
                alt="Uploaded"
                className="circular-image"
              />
              <Edit onClick={handleIconClick} className="upload-icon" />
            </div>
          )}
          <InputField
            type="file"
            name="photo"
            accept="image/*"
            register={register}
            error={errors.photo}
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="form__container">
          <InputField
            type="text"
            label="Nombres"
            name="names"
            register={register}
            error={errors.names}
          />
          <InputField
            type="text"
            label="Apellidos"
            name="surname"
            register={register}
            error={errors.surname}
          />
          <InputField
            type="email"
            label="Correo"
            name="email"
            register={register}
            error={errors.email}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            register={register}
            error={errors.password}
          />
          <InputField
            type="text"
            label="Usuario"
            name="name"
            value={name}
            register={register}
            error={errors.name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="text"
            label="Celular"
            name="phone"
            register={register}
            error={errors.phone}
          />
        </div>
        <Button color="secondary" variant="contained" type="submit" disabled>
          Guardar mis datos
        </Button>
      </form>
    </Grid>
  );
};
