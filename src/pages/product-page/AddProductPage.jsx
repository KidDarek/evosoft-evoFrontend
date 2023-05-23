import { styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";
import MUIButton from "@mui/material/Button";
import { IconButton, Snackbar } from "@mui/material";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const StyledTable = styled("table")({
  width: "25%",
  height: "auto",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "20px 20px 20px 24px",
  fontWeight: "bold",
  textAlign: "center",
  borderSpacing: "10px",
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  variant: "outlined",
  width: "90%",
});

const StyledTitle = styled("div")({
  fontSize: "25px",
  paddingBottom: "5px",
});

const StyledImage = styled("img")({
  alt: "Uploaded",
  maxWidth: "90%",
  maxHeight: "45%",
});

const AddProductPage = () => {
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleSnackOpen = () => {
    setOpenSnack(true);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  const snackAction = (
    <React.Fragment>
      <MUIButton
        color="red"
        size="small"
        variant="contained"
        onClick={handleSnackClose}
      >
        Close
      </MUIButton>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      ></IconButton>
    </React.Fragment>
  );

  const [image, setImage] = useState(null);

  function handleDragEnter(e) {
    e.preventDefault();
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragLeave(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  }

  const { addProduct } = useContext(ProductContext);

  const addNewProduct = async () => {
    const titleField = document.getElementById("TitleField");
    const descriptionField = document.getElementById("DescriptionField");
    const priceField = document.getElementById("PriceField");
    const categoryField = document.getElementById("CategoryField");
    const tagsField = document.getElementById("TagsField");

    const title = titleField.value;
    const description = descriptionField.value;
    const price = priceField.value;
    const category = categoryField.value;
    const tags = tagsField.value.split(", ");

    if (title === "" || description === "" || price === "" || category === "") {
      return;
    }

    await addProduct({
      title: title,
      imageUri: URL.createObjectURL(image),
      body: description,
      price: price,
      category: category,
      tags: tags,
    });
    handleSnackOpen();
  };

  return (
    <>
      <StyledPageDiv>
        <StyledTable>
          <tbody>
            <tr>
              <td>
                <StyledTitle>New product</StyledTitle>
              </td>
            </tr>
            <tr>
              <td>
                <StyledTextField label="Title" id="TitleField" />
              </td>
            </tr>
            <tr>
              <td>
                <StyledTextField label="Description" id="DescriptionField" />
              </td>
            </tr>
            <tr>
              <td>
                <StyledTextField label="Price" type="number" id="PriceField" />
              </td>
            </tr>
            <tr>
              <td>
                <StyledTextField label="Category" id="CategoryField" />
              </td>
            </tr>
            <tr>
              <td>
                <StyledTextField
                  label="Tags (comma-separated)"
                  id="TagsField"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {image ? (
                    <StyledImage src={URL.createObjectURL(image)} />
                  ) : (
                    <StyledImage
                      src="/images/dragAndDrop.png"
                      alt="Drag&Drop an image here."
                    />
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <MUIButton
                  variant="contained"
                  style={{ width: "50%", marginTop: "10px" }}
                  onClick={addNewProduct}
                >
                  {" "}
                  Add product{" "}
                </MUIButton>
              </td>
            </tr>
          </tbody>
        </StyledTable>
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Product added!"
          action={snackAction}
        />
      </StyledPageDiv>
    </>
  );
};

const AddProductPageWithContext = () => (
  <ProductContextProvider>
    <AddProductPage />
  </ProductContextProvider>
);

export default AddProductPageWithContext;
