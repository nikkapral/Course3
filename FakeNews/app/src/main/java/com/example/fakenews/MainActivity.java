package com.example.fakenews;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.PopupWindow;
import android.widget.TextView;
import android.widget.ToggleButton;

public class MainActivity extends AppCompatActivity {

    EditText editTextMainPerson;
    ToggleButton toggleButtonLanguage;
    TextView textViewMainPerson;
    TextView textViewAction;
    Button buttonGenerate;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextMainPerson = findViewById(R.id.editTextMainPerson);
        toggleButtonLanguage = findViewById(R.id.toggleButtonLanguage);
        textViewMainPerson = findViewById(R.id.textViewMainPerson);
        textViewAction = findViewById(R.id.textViewAction);
        buttonGenerate = findViewById(R.id.buttonGenerate);

    }








    @SuppressLint("NonConstantResourceId")
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.editTextMainPerson:
                System.out.println("TEST");
                if (editTextMainPerson.getText().toString().equals(getString(R.string.editTextMainPersonRUS)) || editTextMainPerson.getText().toString().equals(getString(R.string.editTextMainPersonENG)));
                    editTextMainPerson.setText("");
                break;

            case R.id.toggleButtonLanguage:
                if (toggleButtonLanguage.getText().equals(toggleButtonLanguage.getTextOff())){
                    editTextMainPerson.setText(R.string.editTextMainPersonRUS);
                    textViewMainPerson.setText(R.string.textViewMainPersonRUS);
                    textViewAction.setText(R.string.textViewActionRUS);
                    buttonGenerate.setText(R.string.buttonGenerateRUS);
                }


                if (toggleButtonLanguage.getText().equals(toggleButtonLanguage.getTextOn())){
                    editTextMainPerson.setText(R.string.editTextMainPersonENG);
                    textViewMainPerson.setText(R.string.textViewMainPersonENG);
                    textViewAction.setText(R.string.textViewActionENG);
                    buttonGenerate.setText(R.string.buttonGenerateENG);
                }

                break;

            case R.id.buttonGenerate:
                System.out.println("TESTYYY");
                LayoutInflater inflater = (LayoutInflater)
                        getSystemService(LAYOUT_INFLATER_SERVICE);
                View popupView = inflater.inflate(R.layout.pop_up, null);


                int width = LinearLayout.LayoutParams.WRAP_CONTENT;
                int height = LinearLayout.LayoutParams.WRAP_CONTENT;
                boolean focusable = true;
                final PopupWindow popupWindow = new PopupWindow(popupView, width, height, focusable);

                popupWindow.showAtLocation(view, Gravity.CENTER, 0, 0);

                popupView.setOnTouchListener(new View.OnTouchListener() {
                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        popupWindow.dismiss();
                        return true;
                    }
                });


        }





    }

}