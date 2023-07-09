import { Autocomplete, TextField, styled, Chip, Checkbox } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context-providers/ProductContext";
import MUIButton from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const StyledTagsDiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "90%",
  paddingLeft: "5%",
  gap: "7px",
});

const StyledChip = styled(Chip)`
  && {
    color: white;
    border-color: white;
    font-size: 15px;
  }
`;

const StyledChipInput = styled(TextField)(({ theme }) => ({
  maxWidth: "55%",
  "& .MuiInputBase-input": {
    color: "white",
    opacity: 1,
    minWidth: 0,
    flexGrow: 1,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    fontWeight: "bold",
    "&::placeholder": {
      opacity: 1,
      fontWeight: "bold",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
    fontWeight: "bold",
  },
  "& fieldset": {
    border: "none",
    outline: "none",
    padding: 0,
    boxShadow: "none",
    borderRadius: 0,
  },
}));

const StyledTable = styled("table")({
  width: "25%",
  height: "auto",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "20px 15px 20px 15px",
  fontWeight: "bold",
  textAlign: "center",
  borderSpacing: "14px",
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root": {
    color: "white",
    fontWeight: "bold",
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
  fontSize: "28px",
  paddingBottom: "5px",
});

const StyledImage = styled("img")({
  alt: "Uploaded",
  maxWidth: "90%",
  maxHeight: "45%",
});

const StyledDeleteIcon = styled("button")({
  position: "absolute",
  top: "5px",
  right: "25px",
  borderRadius: "15px",
  fontSize: "20px",
  background: "none",
  color: "red",
  cursor: "pointer",
});

const AddProductPage = () => {
  const navigate = useNavigate();
  const navigateToSearchPage = () => {
    navigate(`/Search`);
  };

  const { addProduct, products } = useContext(ProductContext);

  // Category
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

  // Tags
  const [selectedTags, setSelectedTags] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  useEffect(() => {
    const setTags = new Set();
    products.forEach((product) => {
      product.tags.forEach((tags) => setTags.add(tags));
    });
    setUniqueTags([...setTags]);
  }, [products]);

  const handleCheckboxChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  // New tag
  const [newTag, setNewTag] = useState("");
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);

  const handleAddTag = (event) => {
    if (event.key === "Enter" && newTag.trim() !== "") {
      setSelectedTags([...selectedTags, newTag.trim()]);
      setNewTag("");

      if (!uniqueTags.includes(newTag.trim())) {
        setUniqueTags([...uniqueTags, newTag.trim()]);
        setIsAddNewClicked(false);
      }
    }
  };

  const handleAddNewClick = () => {
    setIsAddNewClicked(true);
  };

  // Image drag&drop
  const [image, setImage] = useState(null);
  const [base64String, setBase64] = useState("");

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
    convertToBase64(file);
  }

  function convertToBase64(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      const trimmedBase64 = base64String.substring(
        base64String.indexOf(",") + 1
      );
      setBase64(trimmedBase64);
    };
    reader.readAsDataURL(file);
  }

  function handleDelete() {
    setImage(null);
  }

  const addNewProduct = async () => {
    const titleField = document.getElementById("TitleField");
    const descriptionField = document.getElementById("DescriptionField");
    const priceField = document.getElementById("PriceField");

    const title = titleField.value;
    const description = descriptionField.value;
    const price = priceField.value;

    if (title === "" || description === "" || price === "") {
      return;
    }

    const product = {
      title: title,
      imageData: base64String,
      body: description,
      price: price,
      category: selectedOption,
      tags: selectedTags,
    };
    console.log(product);
    await addProduct(product);
    navigateToSearchPage();
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
                <StyledTagsDiv>
                  {uniqueTags.map((tag) => (
                    <div key={tag}>
                      <StyledChip
                        label={tag}
                        variant={
                          selectedTags.includes(tag) ? "default" : "outlined"
                        }
                        onClick={() => handleCheckboxChange(tag)}
                      />
                      <Checkbox
                        id={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleCheckboxChange(tag)}
                        style={{ display: "none" }}
                      />
                    </div>
                  ))}
                  <StyledChip
                    label={
                      <StyledChipInput
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={handleAddTag}
                        onClick={handleAddNewClick}
                        placeholder="+ Add new tag"
                      />
                    }
                    variant={isAddNewClicked ? "default" : "outlined"}
                  />
                </StyledTagsDiv>
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
                    <div style={{ position: "relative" }}>
                      <StyledImage src={URL.createObjectURL(image)} />
                      <StyledDeleteIcon onClick={handleDelete}>
                        X
                      </StyledDeleteIcon>
                    </div>
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
      </StyledPageDiv>
    </>
  );
};

export default AddProductPage;
