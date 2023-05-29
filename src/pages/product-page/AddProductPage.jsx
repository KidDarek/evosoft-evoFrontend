import {
  Autocomplete,
  TextField,
  styled,
  IconButton,
  Snackbar,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";
import MUIButton from "@mui/material/Button";

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
  "& .MuiAutocomplete-clearIndicator": {
    color: "white",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "white",
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

  const { addProduct, products } = useContext(ProductContext);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const setCategories = new Set();
    products.forEach((product) => setCategories.add(product.category));
    setUniqueCategories([...setCategories]);
  }, [products]);

  const [selectedOption, setSelectedOption] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event, value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newCategory = inputValue.trim();
      if (!uniqueCategories.includes(newCategory)) {
        setUniqueCategories([...uniqueCategories, newCategory]);
      }
      setSelectedOption(newCategory);
      setInputValue("");
    }
  };

  const addNewProduct = async () => {
    const titleField = document.getElementById("TitleField");
    const descriptionField = document.getElementById("DescriptionField");
    const priceField = document.getElementById("PriceField");
    const tagsField = document.getElementById("TagsField");

    const title = titleField.value;
    const description = descriptionField.value;
    const price = priceField.value;
    const tags = tagsField.value.split(", ");

    if (title === "" || description === "" || price === "") {
      return;
    }

    await addProduct({
      title: title,
      imageUri: URL.createObjectURL(image),
      body: description,
      price: price,
      category: selectedOption,
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
                <Autocomplete
                  options={uniqueCategories}
                  value={selectedOption}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <StyledTextField
                      {...params}
                      label="Category"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "off",
                      }}
                      fullWidth
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                  )}
                />
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
