# Testing

## How to test

Follow the [Guiding Principles of React Testing Library](https://github.com/testing-library/react-testing-library#guiding-principles) when writing tests.

## What to test

### Accessibility

Automated accessibility tests are required for significant component variations and should use existing `toHaveNoAxeViolations()` and `toHaveNoDAPViolations()` Jest matchers.

Use this structure for automated accessibility tests:

```
test('should have no Axe or DAP violations', async () => {
  const main = document.createElement('main');
  render(
    <Component />,
    {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    }
  );

  await expect(document.body).toHaveNoAxeViolations();
  await expect(document.body).toHaveNoDAPViolations('ComponentName');
});


test('should have no Axe or DAP violations with component variation', async () => {
  const main = document.createElement('main');
  render(
    <Component variationProp={value} />,
    {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    }
  );

  await expect(document.body).toHaveNoAxeViolations();
  await expect(document.body).toHaveNoDAPViolations('ComponentName with variation');
});
```

#### Test structure

- Each significant variation of a component should have its own test block.
- Use an **asynchronous** test block, and **await** each accessibility rule matcher.

#### DAP requirements

- DAP requires that components be rendered inside a valid landmark element, which is why the `container` is a `main` node. This extra step may not be required if the component is already wrapped in a `main` or another significant HTML landmark element.
- DAP requires a unique id per test within a given component. (Hence, "ComponentName" and "ComponentName with variation")

## User events

### Click events

Click events that are important to component functionality should be tested using mocks.

```
test('should invoke close mock when close button is clicked', () => {
  const onCloseMock = jest.fn();
  const { getByLabelText } = render(
    <Component
      labelText="test close"
      onClick={onCloseMock}
    />
  );

  userEvent.click(getByLabelText(/test close/i));
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});
```

### Tabbing

Write a series of tab cycle tests in order to verify that a user can tab through the interactive pieces of the component in a predictable way. Tab cycle tests are very useful for finding hidden "focus traps".

Each tab cycle test should traverse completely through the ideal tab order, in a loop that begins and ends with the first interactive element that receives focus.

Similar to accessibility tests, a tab cycle test should be written for each significant component variation, especially if a variation adds or removes interactive elements from the component.

Example of a tab cycle test for `PanelV2`:

```
  test('should cycle panel elements in tab order', () => {
    const { getByLabelText, getByText } = render(
      <PanelV2
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>
          test content text
          <Button>test content button</Button>
        </PanelContent>
      </PanelV2>
    );

    userEvent.tab();

    // The close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();

    userEvent.tab();

    // The button inside the `PanelContent` wrapper:
    expect(getByText(/test content button/i)).toHaveFocus();

    userEvent.tab();

    // The footer button:
    expect(getByText(/test footer button/i)).toHaveFocus();

    userEvent.tab();

    // Loop complete.
    // The close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();
  });
```

Note that if the component is a single interactive element, like a single `<a>` or `<button>` then a tab cycle test may not be necessary. The `TrendingCard` is an example of a component that does not require a tab cycle test.
