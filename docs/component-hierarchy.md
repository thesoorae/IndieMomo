# Component Hierarchy
## Root
- Header
- {Children}

## Login

**AuthFormContainer**
- AuthForm
  - Error

## Home Page

**HomeContainer**
- **ImagesSliderContainer**
  - ImagesSlider
- **BatchesBriefSliderContainer**
  - BatchesBriefSlider
    - BatchesBriefItems
      - BatchProgressTracker
- **CategoriesIndexContainer**
  - CategoriesIndex
    - CategoriesIndexItem



## Batch Detail Description Page

- **BatchDetailContainer**
  - **ProductSummaryContainer**
    - ProductImagesSlider
    - ProductSummaryInformaiton
      - ProgressTracker
      - OrderForm
  - **MeetTheChefContainer (bonus)**
    - MeetTheChefContainer
  - **BatchDetailsTextContainer (bonus)**
    - BatchDetailItems
  - **BatchReviewsContainer (bonus)**
    - BatchReviewItems
  - **OrdersOptionsIndex**
    - OrdersOptionsItems

## Batch Details Form
- BatchDetailsHeader
- **BatchDetailsFormContainer**
  - BatchDetailsForm

## User Profile Page
- **UserProfileContainer**
  - UserInfo
  - MyOrders
  - MySales


# Routes

| Path | Component |
|------|-----------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/batches/:batchId" | "BatchDetailContainer" |
| "/batches/new" | "BatchDetailsFormContainer" |
| "/batches/:batchId/edit" | "BatchDetailsFormContainer" |
