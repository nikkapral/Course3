package kapralov.filters;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class SetTextOptionsActivity extends AppCompatActivity {
    String color;
    String position;
    RadioGroup rgColor;
    RadioGroup rgPosition;
    RadioButton radioButtonColor;
    RadioButton radioButtonPosition;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_set_text_options);
    }

    public void onClick(View v) {
        rgColor = findViewById(R.id.radioGroupColor);
        rgPosition = findViewById(R.id.radioGroupPosition);

        // get selected radio button from radioGroup
        int selectedIdColor = rgColor.getCheckedRadioButtonId();
        int selectedIdPosition = rgPosition.getCheckedRadioButtonId();

        // find the radiobutton by returned id
        radioButtonColor = (RadioButton) findViewById(selectedIdColor);
        radioButtonPosition = (RadioButton) findViewById(selectedIdPosition);

        Intent intent = new Intent();
        intent.putExtra("color", radioButtonColor.getText().toString());
        intent.putExtra("position", radioButtonPosition.getText().toString());
        System.out.println( radioButtonPosition.getText().toString());
        setResult(RESULT_OK, intent);
        finish();
    }
}