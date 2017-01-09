# Component Hierarchy

## Login

**AuthFormContainer**
- AuthForm
  - Error

## Home Page

**HomeContainer**
- Header
- **ImagesSliderContainer**
  - ImagesSlider
- **BatchesBriefSliderContainer**
  - BatchesBriefSlider
    - BatchesBriefItems
      - BatchProgressTracker
- **CategoriesIndexContainer**
  - CategoriesIndex
    - CategoriesIndexItem

- **GetStartedContainer**
  - GetStarted

## Batch Detail Description Page

- Header
- **BatchDetailContainer**
  - **ProductSummaryContainer**
    - ProductImagesSlider
    - ProductSummaryInformaiton
      - ProgressTracker
      - OrderForm
  - **MeetTheChefContainer**
    - MeetTheChefContainer
  - **BatchDetailsTextContainer**
    - BatchDetailItems
  - **BatchReviewsContainer**
    - BatchReviewItems
  - **OrdersOptionsIndex**
    - OrdersOptionsItems

## New Batch Form (may not make)
- Header
- **NewBatchFormContainer**
  - NewBatchForm

## Batch Details Form
- Header
- BatchDetailsHeader
- **BatchDetailsFormContainer**
  - BatchDetailsForm

## User Profile Page
- Header
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
| "/batches/:batch_id" | "BatchDetailContainer" |
| "/new-batch" | "NewBatchFormContainer" |
| "/complete-your-batch" | "BatchDetailsFormContainer" |
